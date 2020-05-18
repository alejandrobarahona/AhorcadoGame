import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoFirebaseService {
  Categories: Observable<any[]>;
  Words: Observable<any[]>;
  Players: Observable<any[]>;
  // Tables: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    try {
      console.log(`Firestore: ${firestore}`);
      this.Categories = firestore.collection('Categories').valueChanges();
      this.Words = firestore.collection('WordsToFind').valueChanges();
      this.Players = firestore.collection('Players').valueChanges();
      // this.Tables = firestore.collection('Tables').valueChanges();
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
}
