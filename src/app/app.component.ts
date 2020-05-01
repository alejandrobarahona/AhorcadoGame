import { Component, OnInit } from '@angular/core';
import { SocketioService } from './servicios/socketio.service';
import { InfogameService } from './servicios/infogame.service';
import { InfoFirebaseService } from './servicios/info-firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ahorcado';
  divOptions = '';
  initialDataToGame;

  constructor(
    private socketService: SocketioService,
    private infGame: InfogameService,
    private infFirebase: InfoFirebaseService
  ) {
    // this.socketService.setupSocketConnection("Arraca la aplicacion");
    // this.socketService.getConnectionData().then((result) => {
    //   console.log("getConnectionData: " + result);
    // });
  }

  ngOnInit() {
    // this.infGame.word = 'eterno resplandor de una mente sin recuerdos'.toUpperCase();
    // this.infGame.createArrayAlphabet();
    // this.infGame.createUpdateWordObj();
    document.getElementById('btnCreateData').hidden = true;
    document.getElementById('btnGameInit').hidden = true;
    document.getElementById('divGame').hidden = true;
    document.getElementById('btnGameReset').hidden = true;
    // document.getElementById('btnGetData').hidden = true;
  }

  btnCreateData(event: Event) {
    this.socketService.createInitialData({});
  }

  btnGetData(event: Event) {
    // this.socketService.getInitialData().then((resultado) => {
    //   this.initialDataToGame = JSON.parse(resultado);
    //   this.showOptionsToGame();
    //   this.initialDataToGame.categories.forEach((elt) => {
    //     console.log(elt);
    //   });
    // });

    this.showOptionsToGame();
  }

  showOptionsToGame() {
    document.getElementById('btnGetData').hidden = true;

    this.showCategoryGame();
    const selCat = document.querySelector('#selectCat');
    selCat.addEventListener('change', this.eventCategory);
  }

  btnGameInit(event: Event) {
    document.getElementById('divGameOptions').hidden = true;
    document.getElementById('btnGameInit').hidden = true;
    document.getElementById('btnGameReset').hidden = false;
    document.getElementById('divGame').hidden = false;
    this.clearSelect('selectCat');
    this.infGame.createArrayAlphabet();
    this.infGame.createUpdateWordObj();
  }

  btnGameReset(event: Event) {
    document.getElementById('btnGetData').hidden = true;
    document.getElementById('btnGameReset').hidden = true;
    document.getElementById('btnGameInit').hidden = true;
    document.getElementById('divOptions').hidden = false;
    document.getElementById('divGame').hidden = true;
    document.getElementById('divGameOptions').hidden = false;
    this.showOptionsToGame();
  }

  btnConnectTable(event: Event) {
    // this.socketService.
  }

  /**
   * Crea las opciones para seleccionar la palabra a buscar
   */
  showCategoryGame() {
    let bloque = document.getElementById('showWords');

    let elemtCat;
    let existCat = document.getElementById('selectCat');
    if (existCat == null) {
      elemtCat = document.createElement('select');
    } else {
      elemtCat = existCat;
    }

    elemtCat.setAttribute('class', 'custom-select custom-select-sm-1 mb-3');
    elemtCat.id = 'selectCat';
    bloque.appendChild(elemtCat);

    let first = true;

    this.infFirebase.Categories.forEach((catDoc) => {
      catDoc.forEach((cat) => {
        let option = document.createElement('option');
        if (first) {
          option.value = '0';
          option.text = 'Seleccione Categoria..';

          elemtCat.appendChild(option);
          first = false;
          option = document.createElement('option');
        }
        option.value = cat.CategoryId;
        option.text = cat.CategoryName;

        elemtCat.appendChild(option);
      });
    });
  }

  eventCategory = () => {
    let val = document.getElementById('selectCat') as HTMLSelectElement;
    this.infGame.categoryName = val[val.selectedIndex].textContent;
    this.showWordsGame(val.selectedIndex);
  };

  /**
   * Llena la lista de las palabras que se pueden seleccionar
   * @param idCat Id de la categoria a la que pertenecen las palabras
   */
  showWordsGame(idCat: number) {
    let newWord = new Array();

    this.infFirebase.Words.forEach((wordDoc) => {
      wordDoc.map((idx) => {
        if (idx.CategoryId == idCat) {
          newWord.push(idx.Word);
        }
      });
      let cantWords = newWord.length;
      this.infGame.word = newWord[this.numeroAleatorio(0, cantWords - 1)];
      document.getElementById('btnGameInit').hidden = false;
    });
  }

  numeroAleatorio(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  eventWord = () => {
    let val = document.getElementById('selectWord') as HTMLSelectElement;
    this.infGame.word = val[val.selectedIndex].textContent;
    document.getElementById('btnGameInit').hidden = false;
  };

  /**
   * Limpia una lista desplegable
   * @param nameSelect Id de la lista a limpiar
   */
  clearSelect(nameSelect) {
    let selToClear = document.getElementById(nameSelect) as HTMLSelectElement;
    for (let i = selToClear.options.length; i >= 0; i--) {
      selToClear.remove(i);
    }
  }
}
