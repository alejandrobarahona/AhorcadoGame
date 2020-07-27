import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class InfoFirebaseService {
  Words: Observable<any[]>;
  ayudaPalabras = [];
  categorias = [];

  constructor(private firestore: AngularFirestore) {
    try {
      this.Words = firestore.collection('WordsToFind').valueChanges();

      this.getData('Categories').subscribe((catSnapshot) => {
        catSnapshot.forEach((catData: any) => {
          this.categorias.push({
            id: catData.payload.doc.data().CategoryId,
            name: catData.payload.doc.data().CategoryName,
          });
        });
      });

      this.getData('WordsToFind').subscribe((wordSnapshot) => {
        wordSnapshot.forEach((wordData: any) => {
          this.ayudaPalabras.push({
            id: wordData.payload.doc.id,
            category: wordData.payload.doc.data().CategoryId,
            word: wordData.payload.doc.data().Word,
            // categoryName: this.categorias.filter(
            //   (ct) => ct.id === wordData.payload.doc.data().CategoryId
            // )[0].name,
            show: false,
            help:
              wordData.payload.doc.data().Help === undefined
                ? 'Esta palabra es tan fácil que no tiene ayuda'
                : wordData.payload.doc.data().Help,
          });
        });
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  getData(tableName: string) {
    return this.firestore.collection(tableName).snapshotChanges();
  }

  getDataByDocId(tableName: string, docId: string) {
    return this.firestore.collection(tableName).doc(docId).snapshotChanges();
  }

  getHelpByWord(wordToHelp: string) {
    let result: any;
    result = this.ayudaPalabras.filter((f) => {
      if (f.word === wordToHelp) {
        return f;
      }
    });
    return result[0].help;
  }

  /**
   * Crea un usuario en la BD del juego, para llevar el registro de:
   * - Ultima vez que jugó
   * - Puntuación máxima
   */
  createUser(createPlayer: any) {
    try {
      this.firestore
        .collection('Players')
        .doc('' + createPlayer.Id + '')
        .set(createPlayer);
    } catch (error) {
      console.log(
        `Se presentó el siguiente error al crear la información del usuario: ${error}`
      );
    }
  }

  /**
   * Actualiza el puntaje del usuario que está jugando
   */
  updateInfoUser(infoPlayer: any) {
    // console.log(infoPlayer);

    try {
      this.firestore
        .collection('Players')
        .doc('' + infoPlayer.Id + '')
        .update(infoPlayer);
    } catch (error) {
      console.log(
        `Se presentó el siguiente error al actualizar la información del usuario: ${error}`
      );
    }
  }

  deleteInfoUser(docUser: string) {
    try {
      return this.firestore
        .collection('Players')
        .doc('' + docUser + '')
        .delete();
    } catch (error) {}
  }

  existUserByDocId(doc: string) {
    const existPlayer = this.firestore.collection('Players').doc(doc).get();
    return new Promise(function (resolve, reject) {
      try {
        existPlayer.subscribe((data) => {
          // console.log(`Existe el usuario ${doc}: ${data.exists}`);

          resolve(data.exists);
        });
      } catch (error) {
        console.log(`Error servicio: ${error}`);
        reject(false);
      }
    });
  }

  /**
   * Retorna las palabras que hacen parte de una categoría
   * @param idCategory Id de la categoría
   */

  getWordToCategory() {
    let newWord = [];
    let word: any;
    newWord = this.ayudaPalabras.filter((idx) => !idx.show);
    // newWord = this.ayudaPalabras.filter((idx) => !idx.show);
    const alt = this.numeroAleatorio(0, newWord.length - 1);

    word = newWord[alt];
    word.categoryName = this.categorias.filter(
      (ct) => ct.id === newWord[alt].category
    )[0].name;
    this.ayudaPalabras = this.ayudaPalabras.filter((idx) => {
      if (idx.id === newWord[alt].id) {
        idx.show = true;
        return idx;
      }
      return idx;
    });
    return word;
  }

  numeroAleatorio(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
