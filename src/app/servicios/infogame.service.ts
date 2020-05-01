import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class InfogameService {
  AlphabetInfo = new Array<Alphabet>();
  WordFind = new Array<ShowLetters>();
  WordShow = new Array<PaintWords>();
  LetterNoWord;
  letterNW: string;
  countLetterTotal: number;
  categoryName: string;
  private subObject = new BehaviorSubject<Array<ShowLetters>>(this.WordFind);
  public obsObject$ = this.subObject.asObservable();

  private subObjectAlphabet = new BehaviorSubject<Array<Alphabet>>(
    this.AlphabetInfo
  );
  public obsObjAlph$ = this.subObjectAlphabet.asObservable();

  private subObjWords = new BehaviorSubject<Array<PaintWords>>(this.WordShow);
  public obsObjWords$ = this.subObjWords.asObservable();

  @Input() word: string;
  userinfo = new InfoUser();

  constructor() {
    this.LetterNoWord = new Array<ShowLetters>();
  }

  createInfoUser() {
    let today = new Date();
    let todayString, day, month;

    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      day = `0${dd}`;
    } else {
      day = dd;
    }

    if (mm < 10) {
      month = `0${mm}`;
    } else {
      month = mm;
    }
    todayString = `${day}/${month}/${yyyy}`;
    this.userinfo.userId = this.generateUI();
    this.userinfo.sessionDate = todayString;
    this.userinfo.tableId = '';
    return this.userinfo;
  }

  generateUI() {
    return uuidv4();
  }

  createArrayAlphabet() {
    this.AlphabetInfo = new Array<Alphabet>();
    // Primera linea de letras
    var alph = new Alphabet();
    alph.idRow = 0;
    alph.data = new Array<Letter>();

    var lett = new Letter();
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

  createUpdateWordObj() {
    if (this.word !== '' && this.word !== undefined) {
      // console.log(this.word);

      let palabras = this.word.split(' ');
      let WordShow_ = new Array<PaintWords>();
      this.WordShow = new Array<PaintWords>();
      this.WordFind = new Array<ShowLetters>();
      this.LetterNoWord = new Array<ShowLetters>();
      let createWord = new ShowLetters();
      this.countLetter();
      let pal = 0;
      let showW = new PaintWords();
      showW.id = pal;
      showW.data = new Array<ShowLetters>();
      for (let index = 0; index < this.word.length; index++) {
        const element = this.word.charAt(index);
        if (element == ' ') {
          createWord = new ShowLetters();
          createWord.letter = '/';
          createWord.letterNoShow = '/';
          createWord.style = 'btn btn-dark text-dark';
          this.WordFind.push(createWord);
          showW.data.push(createWord);
          WordShow_.push(showW);
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

      WordShow_.push(showW);
      let idWS = 0;
      let objPaint = new PaintWords();
      objPaint.id = idWS;
      objPaint.data = new Array<ShowLetters>();

      for (let idx = 0; idx < WordShow_.length; idx++) {
        let element = WordShow_[idx].data;
        let tam = element.length;

        if (tam + objPaint.data.length <= 13) {
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
    let countWord = this.word.replace(/ /g, '');
    this.countLetterTotal = countWord.length;
  }

  validateLetter(letterToValidate: string) {
    let noExist = false;
    if (this.word.indexOf(letterToValidate) >= 0) {
      this.WordFind.forEach((element) => {
        if (element.letterNoShow == letterToValidate) {
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
        if (lett.nameLetter == letterToValidate) {
          lett.stateLetter = 'disabled';
          if (noExist) lett.classButton = 'btn btn-danger';
          else lett.classButton = 'btn btn-warning';
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
    let lettNoWrd = new ShowLetters();
    lettNoWrd.letter = this.letterNW;
    lettNoWrd.letterNoShow = this.letterNW;
    this.LetterNoWord.push(lettNoWrd);
    this.subObject.next(this.LetterNoWord);
  }

  validateGame() {
    let finish = true;
    this.WordFind.forEach((element) => {
      if (element.letter !== element.letterNoShow) {
        finish = false;
      }
    });
    if (finish) {
      alert(`GANASTE!!! ${this.word}`);
    }
  }

  /**
   * Volver los resultados de consultas un Arreglo
   * Deprecated
   */
  getInfoGame(objToParse) {
    try {
      // console.log(objToParse);

      objToParse = JSON.parse(objToParse);
      let newObject = '{';
      let initialDataKEYS = Object.keys(objToParse);
      for (let index = 0; index < initialDataKEYS.length; index++) {
        try {
          let tableName = initialDataKEYS[index];
          newObject += `"${tableName}":[`;
          let tablesIds = Object.keys(objToParse[tableName]);
          for (let tIdx = 0; tIdx < tablesIds.length; tIdx++) {
            try {
              let idReg = tablesIds[tIdx];
              newObject += `{"id":"${idReg}",`;
              let fieldName = Object.keys(objToParse[tableName][idReg]);
              for (let fielInd = 0; fielInd < fieldName.length; fielInd++) {
                try {
                  let element = fieldName[fielInd];
                  newObject += `"${element}":"${objToParse[tableName][idReg][element]}"`;
                  if (fielInd == fieldName.length - 1) {
                  } else {
                    newObject += `,`;
                  }
                } catch (error) {
                  console.log(`Error en el tercer nivel ${error}`);
                  break;
                }
              }
              newObject += `}`;
              if (tIdx == tablesIds.length - 1) {
              } else {
                newObject += `,`;
              }
            } catch (error) {
              console.log(`Error en el segundo nivel ${error}`);
              break;
            }
          }
          newObject += `]`;
          if (index == initialDataKEYS.length - 1) {
          } else {
            newObject += `,`;
          }
        } catch (error) {
          console.log(`Error recorriendo el primer nivel: ${error}`);
          break;
        }
      }
      newObject += `}`;
      return JSON.parse(newObject);
    } catch (error) {
      console.log(`Error convierto datos: ${error}`);
    }
  }

  setImageToNoLetter(numberError) {
    switch (numberError) {
      case 1:
        return '../assets/Gallow_Complete_2.png';

      case 2:
        return '../assets/Gallow_Complete_3.png';

      case 3:
        return '../assets/Gallow_Complete_4.png';

      case 4:
        return '../assets/Gallow_Complete_5.png';

      case 5:
        return '../assets/Gallow_Complete_6.png';

      case 6:
        return '../assets/Gallow_Complete_7.png';

      default:
        return '../assets/Gallow_Complete_1.png';
    }
  }
}

class InfoUser {
  userId: string;
  tableId: string;
  sessionDate: string;
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
