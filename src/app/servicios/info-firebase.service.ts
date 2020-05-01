import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoFirebaseService {
  Categories: Observable<any[]>;
  Words: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.Categories = firestore.collection('Categories').valueChanges();
    this.Words = firestore.collection('WordsToFind').valueChanges();
  }
}