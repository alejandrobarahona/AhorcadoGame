import {
  Component,
  OnInit,
  Output,
  OnDestroy,
  EventEmitter,
} from '@angular/core';
// import { SocketioService } from './servicios/socketio.service';
import { InfogameService } from './servicios/infogame.service';
import { InfoFirebaseService } from './servicios/info-firebase.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Ahorcado';
  idsCat;
  initialDataToGame;
  btnGInit;
  btnReset;
  btnNW;
  btnGData;

  @Output() onComplete = new EventEmitter<void>();

  private subFinishGame: Subscription = null;

  constructor(
    // private socketService: SocketioService,
    private infGame: InfogameService,
    private infFirebase: InfoFirebaseService
  ) {
    // this.socketService.setupSocketConnection("Arraca la aplicacion");
    // this.socketService.getConnectionData().then((result) => {
    //   console.log("getConnectionData: " + result);
    // });
  }

  ngOnInit() {
    document.getElementById('btnCreateData').hidden = true;
    document.getElementById('divGame').hidden = true;
    this.btnReset = document.getElementById(
      'btnGameReset'
    ) as HTMLButtonElement;
    this.btnReset.hidden = true;

    this.btnGInit = document.getElementById('btnGameInit') as HTMLButtonElement;
    this.btnGInit.hidden = true;

    this.btnNW = document.getElementById('btnNextWord') as HTMLButtonElement;
    this.btnNW.hidden = true;
    // this.btnGData.hidden = true;

    this.btnGData = document.getElementById('btnGetData') as HTMLButtonElement;
    // this.btnGData.hidden = true;
    this.subFinishGame = this.infGame.obsFinishGame$.subscribe(() => {
      this.onComplete.emit();
      if (this.infGame.finishGame && this.infGame.winGame) {
        this.btnNW.disabled = false;
      } else if (this.infGame.finishGame && this.infGame.lostGame) {
        this.btnReset.disabled = false;
      }
    });
    this.showOptionsToGame();
  }

  ngOnDestroy() {
    this.subFinishGame.unsubscribe();
  }

  btnCreateData(event: Event) {
    // this.socketService.createInitialData({});
  }

  btnGetData(event: Event) {}

  showOptionsToGame() {
    this.btnGData.hidden = true;

    this.showCategoryGame();
    const selCat = document.querySelector('#selectCat');
    selCat.addEventListener('change', this.eventCategory);
  }

  btnGameInit(event: Event) {
    // document.getElementById('divGameOptions').hidden = true;
    // this.btnGInit.hidden = false;
    // this.btnReset.hidden = false;
    // document.getElementById('divGame').hidden = false;
    // this.clearSelect('selectCat');
    // this.infGame.createArrayAlphabet();
    // this.infGame.createUpdateWordObj();
    this.initGame(true);
  }

  btnGameReset(event: Event) {
    if (this.infGame.lostGame) {
      this.btnNW.disabled = true;
      this.infGame.lostGame = false;
      this.infGame.finishGame = false;
      this.infGame.winGame = false;
      this.infGame.lostGame = false;
      this.btnGData.hidden = true;
      this.btnReset.hidden = true;
      this.btnGInit.hidden = true;
      this.btnNW.hidden = true;
      document.getElementById('divOptions').hidden = false;
      document.getElementById('divGame').hidden = true;
      document.getElementById('divGameOptions').hidden = false;
      this.showOptionsToGame();
    } else {
      alert('Animo, aún puedes encontrar la palabra');
    }
    // this.newGame();
  }

  btnNextWord(event: Event) {
    if (this.infGame.winGame) {
      this.newGame();
    } else {
      alert('Debes encotrar la palabra para continuar');
      return;
    }
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
      this.idsCat = new Array<CatInfo>();
      do {
        elemtCat.remove(elemtCat.length - 1);
        first = true;
      } while (elemtCat.length > 0);

      catDoc.forEach((cat) => {
        let option = document.createElement('option');
        if (first) {
          option.value = '0';
          option.text = 'Seleccione Categoria..';

          elemtCat.appendChild(option);
          first = false;
          option = document.createElement('option');
        }
        let ctInf = new CatInfo();
        ctInf.id = cat.CategoryId;
        ctInf.name = cat.CategoryName;
        this.idsCat.push(ctInf);
        option.value = cat.CategoryId;
        option.text = cat.CategoryName;
        elemtCat.appendChild(option);
      });
    });
  }

  eventCategory = () => {
    let val = document.getElementById('selectCat') as HTMLSelectElement;
    this.infGame.categoryName = val[val.selectedIndex].textContent;
    this.showWordsGame(val.selectedIndex, false);
  };

  /**
   * Llena la lista de las palabras que se pueden seleccionar
   * @param idCat Id de la categoria a la que pertenecen las palabras
   */
  showWordsGame(idCat: number, reset: boolean) {
    let newWord = new Array();

    this.infFirebase.Words.forEach((wordDoc) => {
      wordDoc.map((idx) => {
        if (idx.CategoryId == idCat) {
          newWord.push(idx.Word);
        }
      });
      let cantWords = newWord.length;
      this.infGame.word = newWord[this.numeroAleatorio(0, cantWords - 1)];
      if (reset) {
        this.infGame.finishGame = false;
        this.initGame(false);
        this.btnGInit.hidden = true;
      } else {
        this.btnGInit.hidden = false;
      }
    });
  }

  numeroAleatorio(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  eventWord = () => {
    let val = document.getElementById('selectWord') as HTMLSelectElement;
    this.infGame.word = val[val.selectedIndex].textContent;
    this.btnGInit.hidden = false;
  };

  initGame(resetGallow: boolean) {
    document.getElementById('divGameOptions').hidden = true;
    this.btnGInit.hidden = true;
    document.getElementById('divGame').hidden = false;
    this.btnReset.hidden = false;
    this.btnReset.disabled = true;

    this.btnNW.disabled = true;
    this.btnNW.hidden = false;

    this.clearSelect('selectCat');
    this.infGame.createArrayAlphabet();
    this.infGame.createUpdateWordObj(resetGallow);
  }

  newGame() {
    if (
      this.idsCat == undefined ||
      this.idsCat == null ||
      this.idsCat.length === 0
    )
      return;
    this.infGame.winGame = false;
    this.btnReset.disabled = true;
    let idCategoryNew = this.numeroAleatorio(1, this.idsCat.length);
    this.btnGData.hidden = true;
    this.btnReset.hidden = true;
    document.getElementById('divOptions').hidden = false;
    document.getElementById('divGame').hidden = true;
    document.getElementById('divGameOptions').hidden = false;
    this.infGame.categoryName = this.idsCat[idCategoryNew - 1].name;
    this.showWordsGame(idCategoryNew, true);
  }

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

class CatInfo {
  id: number;
  name: string;
}
