import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InfoFirebaseService } from './info-firebase.service';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

declare const FB: any;

@Injectable({
  providedIn: 'root',
})
export class InfogameService {
  AlphabetInfo = new Array<Alphabet>();
  WordFind = new Array<ShowLetters>();
  WordShow = new Array<PaintWords>();
  LetterNoWord: Array<ShowLetters>;
  letterNW: string;
  countLetterTotal: number;
  rachaGanadora: number;
  rachaMaxima: number;
  finishGame = false;
  lostGame = false;
  winGame = false;

  userInfo = new UserInfo();

  // Url GraphAPI
  urlApiFB = 'https://graph.facebook.com/v7.0/';

  user: SocialUser;
  loggedIn: boolean;
  categoryName: string;

  private subObject = new BehaviorSubject<Array<ShowLetters>>(this.WordFind);
  public obsObject$ = this.subObject.asObservable();
  private subObjectAlphabet = new BehaviorSubject<Array<Alphabet>>(
    this.AlphabetInfo
  );
  public obsObjAlph$ = this.subObjectAlphabet.asObservable();

  private subObjWords = new BehaviorSubject<Array<PaintWords>>(this.WordShow);
  public obsObjWords$ = this.subObjWords.asObservable();

  private subFinishGame = new BehaviorSubject<boolean>(this.finishGame);
  public obsFinishGame$ = this.subFinishGame.asObservable();

  @Input() word: string;

  constructor(
    private infFirebase: InfoFirebaseService,
    private authService: SocialAuthService,
    protected http: HttpClient
  ) {
    this.rachaMaxima = 0;
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
    this.LetterNoWord = new Array<ShowLetters>();
    this.rachaGanadora = 0;
  }

  getFriends(userID, tokenAccess) {
    return this.http.get(
      `${this.urlApiFB}${userID}/friends?access_token=${tokenAccess}`
    );
    // return this.infFirebase.getData('Players');
  }

  createArrayAlphabet() {
    this.AlphabetInfo = new Array<Alphabet>();
    // Primera linea de letras
    let alph = new Alphabet();
    alph.idRow = 0;
    alph.data = new Array<Letter>();

    let lett = new Letter();
    lett.nameLetter = 'Q';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'W';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'E';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'R';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'T';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'Y';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'U';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'I';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'O';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'P';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    this.AlphabetInfo.push(alph);

    // Segunda linea de letras
    alph = new Alphabet();
    alph.idRow = 1;
    alph.data = new Array<Letter>();

    lett = new Letter();
    lett.nameLetter = 'A';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'S';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'D';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'F';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'G';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'H';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'J';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'K';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'L';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'Ñ';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    this.AlphabetInfo.push(alph);

    // Tercera linea de letras
    alph = new Alphabet();
    alph.idRow = 2;
    alph.data = new Array<Letter>();

    lett = new Letter();
    lett.nameLetter = 'Z';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'X';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'C';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'V';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'B';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'N';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    lett = new Letter();
    lett.nameLetter = 'M';
    lett.stateLetter = 'enabled';
    lett.classButton = 'btn btn-info';
    alph.data.push(lett);

    this.AlphabetInfo.push(alph);
    this.subObjectAlphabet.next(this.AlphabetInfo);
  }

  createUpdateWordObj(resetGallow: boolean) {
    if (this.word !== '' && this.word !== undefined) {
      // console.log(this.word);

      // let palabras = this.word.split(' ');
      const WORDSHOW_ = new Array<PaintWords>();
      this.WordShow = new Array<PaintWords>();
      this.WordFind = new Array<ShowLetters>();
      if (resetGallow) {
        this.LetterNoWord = new Array<ShowLetters>();
      }
      let createWord = new ShowLetters();
      this.countLetter();
      let pal = 0;
      let showW = new PaintWords();
      showW.id = pal;
      showW.data = new Array<ShowLetters>();
      for (let index = 0; index < this.word.length; index++) {
        const element = this.word.charAt(index);
        if (element === ' ') {
          createWord = new ShowLetters();
          createWord.letter = '/';
          createWord.letterNoShow = '/';
          createWord.style = 'btn btn-dark text-dark';
          this.WordFind.push(createWord);
          showW.data.push(createWord);
          WORDSHOW_.push(showW);
          showW = new PaintWords();
          pal++;
          showW.id = pal;
          showW.data = new Array<ShowLetters>();
        } else {
          createWord = new ShowLetters();
          createWord.letter = '_';
          createWord.letterNoShow = this.word.charAt(index);
          createWord.style = 'btn btn-info';
          this.WordFind.push(createWord);
          showW.data.push(createWord);
        }
      }

      WORDSHOW_.push(showW);
      const idWS = 0;
      let objPaint = new PaintWords();
      objPaint.id = idWS;
      objPaint.data = new Array<ShowLetters>();

      for (let idx = 0; idx < WORDSHOW_.length; idx++) {
        const element = WORDSHOW_[idx].data;

        if (element.length + objPaint.data.length <= 8) {
          objPaint.data = objPaint.data.concat(element);
        } else {
          this.WordShow.push(objPaint);
          objPaint = new PaintWords();
          objPaint.id = idWS;
          objPaint.data = new Array<ShowLetters>();
          objPaint.data = objPaint.data.concat(element);
        }
      }
      if (objPaint.data.length > 0) {
        this.WordShow.push(objPaint);
      }

      this.subObject.next(this.WordFind);
    }
  }

  countLetter() {
    const countWord = this.word.replace(/ /g, '');
    this.countLetterTotal = countWord.length;
  }

  validateLetter(letterToValidate: string) {
    if (this.finishGame) {
      if (this.lostGame) {
        Swal.fire('Perdiste', 'Debes iniciar un nuevo juego', 'error');
      }
      this.subFinishGame.next(this.finishGame);
      return;
    }
    let noExist = false;
    if (this.word.indexOf(letterToValidate) >= 0) {
      this.WordFind.forEach((element) => {
        if (element.letterNoShow === letterToValidate) {
          element.letter = letterToValidate;
          element.style = 'btn btn-success';
        }
      });
    } else {
      noExist = true;
      this.letterNW = letterToValidate;
      this.letterNoWord();
    }
    for (let index = 0; index < this.AlphabetInfo.length; index++) {
      const row = this.AlphabetInfo[index].idRow;
      this.AlphabetInfo[index].data.forEach((lett) => {
        if (lett.nameLetter === letterToValidate) {
          lett.stateLetter = 'disabled';
          if (noExist) {
            lett.classButton = 'btn btn-danger';
          } else {
            lett.classButton = 'btn btn-warning';
          }
        }
      });
    }
    this.subObject.next(this.WordFind);
    this.validateGame();
  }

  /**
   * Metodo que indica si una letra no está en la palabra a buscar
   */
  letterNoWord() {
    const lettNoWrd = new ShowLetters();
    lettNoWrd.letter = this.letterNW;
    lettNoWrd.letterNoShow = this.letterNW;
    this.LetterNoWord.push(lettNoWrd);
    this.subObject.next(this.LetterNoWord);
    if (this.LetterNoWord.length >= 6) {
      this.lostGame = true;
      this.finishGame = true;
      this.subFinishGame.next(false);
    }
  }

  validateGame() {
    let finish = true;
    this.WordFind.forEach((element) => {
      if (element.letter !== element.letterNoShow) {
        finish = false;
      }
    });
    if (finish) {
      this.winGame = true;
      this.finishGame = true;
      this.subFinishGame.next(true);

      if (this.rachaGanadora === this.rachaMaxima) {
        this.rachaGanadora++;
        this.rachaMaxima++;
        // Actualizar el puntaje máximo
        if (this.loggedIn) {
          const updateInfo = {
            Id: this.user.id,
            MaxScore: this.rachaMaxima,
          };
          this.infFirebase.updateInfoUser(updateInfo);
        }
      } else {
        this.rachaGanadora++;
      }
    }
  }

  setImageToNoLetter(numberError) {
    switch (numberError) {
      case 1:
        return '../assets/img/Gallow_Complete_2.png';

      case 2:
        return '../assets/img/Gallow_Complete_3.png';

      case 3:
        return '../assets/img/Gallow_Complete_4.png';

      case 4:
        return '../assets/img/Gallow_Complete_5.png';

      case 5:
        return '../assets/img/Gallow_Complete_6.png';

      case 6:
        return '../assets/img/Gallow_Complete_7.png';

      default:
        return '../assets/img/Gallow_Complete_1.png';
    }
  }

  getUserInfo() {
    return this.infFirebase.getData('Players');
  }

  getDataByDocId(tableName: string, docId: string) {
    return this.infFirebase.getDataByDocId(tableName, docId);
  }

  deleteInfoUser(userId: string) {
    return this.infFirebase.deleteInfoUser(userId);
  }

  updateInfoUser(infoUser: any) {
    this.infFirebase.updateInfoUser(infoUser);
  }

  existUser(doc: string) {
    return this.infFirebase.existUserByDocId(doc);
  }
}

class ShowLetters {
  letter: string;
  letterNoShow: string;
  style: string;
}

class PaintWords {
  id: number;
  data: Array<ShowLetters>;
}

class Letter {
  nameLetter: string;
  stateLetter: string;
  classButton: string;
}

class Alphabet {
  idRow: number;
  data: Array<Letter>;
}

export class UserInfo {
  Id: string;
  Name: string;
  FirstName: string;
  LastName: string;
  Email: string;
  PhotoUrl: string;
  MaxScore: number;
  CreateUser: string;
  LastConnection: string;
  Token: string;
  OnLine: boolean;
  Friends: any;
}
