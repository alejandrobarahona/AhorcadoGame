import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { InfogameService } from '../../../services/infogame.service';
import { Subscription } from 'rxjs';
import { InfoFirebaseService } from '../../../services/info-firebase.service';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tablerodejuego-game',
  templateUrl: './tablerodejuego-game.component.html',
  styles: [],
})
export class TablerodejuegoGameComponent implements OnInit {
  private subFinishGame: Subscription = null;
  btnReset;
  btnPista;
  btnAyuda;
  help1 = true;

  @Output() onComplete = new EventEmitter<void>();

  user: SocialUser;
  loggedIn: boolean;

  constructor(
    private infGame: InfogameService,
    private infFirebase: InfoFirebaseService,
    private authService: SocialAuthService
  ) {
    this.findWord(true);
    this.restablecerPalabras();
  }

  ngOnInit(): void {
    this.btnPista = document.getElementById('btnPista') as HTMLButtonElement;
    this.btnAyuda = document.getElementById('btnAyuda') as HTMLButtonElement;
    this.btnReset = document.getElementById(
      'btnGameReset'
    ) as HTMLButtonElement;
    this.btnReset.disabled = true;

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });

    if (!this.loggedIn) {
      this.infGame.rachaMaxima = 0;
    }

    this.subFinishGame = this.infGame.obsFinishGame$.subscribe(() => {
      this.onComplete.emit();
      if (this.infGame.finishGame && this.infGame.winGame) {
        this.changeWord(false);
      }
      if (this.infGame.finishGame && this.infGame.lostGame) {
        this.btnAyuda.disabled = true;
        this.btnReset.disabled = false;
      }
    });
  }

  /**
   * Obtiene una pista almacenada en la base de datos
   */
  getHelp() {
    if (this.help1) {
      this.help1 = false;
      this.showAlert(
        this.infFirebase.getHelpByWord(this.infGame.word),
        5,
        false
      );
      this.btnPista.disabled = true;
    } else {
      this.showAlert('Ya usaste esta ayuda', 2, false);
      this.btnPista.disabled = true;
    }
  }

  /**
   * Muestra una letra de la palabra, aunque cuesta 1 vida
   */
  showOneLetter() {
    Swal.fire({
      title: 'Te costará una vida',
      text: '¿Quieres que te digamos una letra?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'No, no me digas',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, dimela',
    }).then((result) => {
      if (result.value) {
        this.infGame.validateLetter('-');
        const wordToShow = [];
        for (const letter of this.infGame.WordFind) {
          if (letter.letter !== letter.letterNoShow) {
            wordToShow.push(letter.letterNoShow);
          }
        }
        const alea = this.numeroAleatorio(0, wordToShow.length - 1);
        Swal.fire(wordToShow[alea]);
      }
    });
  }

  showAlert(titleShow: string, timerShow: number, nextAction: boolean) {
    let timerInterval;
    Swal.fire({
      title: titleShow,
      html: 'Este mensaje se autodestruirá en <b></b> milisegundos',
      timer: timerShow * 1000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector('b');
            if (b) {
              b.textContent = Swal.getTimerLeft().toString();
            }
          }
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        if (nextAction) {
          this.findWord(false);
        }
      }
    });
  }

  /**
   * Muestra un mensaje por pantalla y llama al metodo findWord
   * @param reset Se pasa al método findWord
   */
  async changeWord(reset: boolean) {
    // await this.wait2Seconds();
    if (this.infGame.winGame) {
      this.help1 = true;
      this.btnPista.disabled = false;
      this.showAlert('Alistando la siguiente palabra...', 3, true);
    } else {
      // swal(
      //   'No te rindas',
      //   'Debes encotrar la palabra para continuar',
      //   'warning'
      // );
      return;
    }
  }

  /**
   * Promesa para esperar 2 segundos
   */
  wait2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  /**
   * Busca una nueva palabra para el tablero
   * @param reset Indica si se reinicia la horca o no
   */
  findWord(reset: boolean) {
    this.infGame.winGame = false;
    this.infGame.finishGame = false;
    this.infFirebase.Words.forEach((wordDoc) => {
      const wrd = this.infFirebase.getWordToCategory();
      this.infGame.word = wrd.word;
      this.infGame.categoryName = wrd.categoryName;
      this.infGame.createArrayAlphabet();
      this.infGame.createUpdateWordObj(reset);
    });
  }

  restablecerPalabras() {
    if (this.infFirebase.ayudaPalabras) {
      this.infFirebase.ayudaPalabras.forEach((element) => {
        element.show = false;
      });
    }
  }

  numeroAleatorio(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  btnGameReset(event: Event) {
    this.help1 = true;
    this.btnPista.disabled = false;
    this.btnAyuda.disabled = false;
    this.infGame.lostGame = false;
    this.infGame.finishGame = false;
    this.infGame.winGame = false;
    if (!this.loggedIn) {
      this.infGame.rachaGanadora = 0;
      this.infGame.rachaMaxima = 0;
    }
    this.btnReset.disabled = true;
    this.findWord(true);
  }
}
