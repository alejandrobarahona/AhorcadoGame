import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FacebookService {
  private user: Observable<firebase.User | null>;
  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }

  // Obtener el estado de autenticación
  get authenticated(): boolean {
    return this.user != null; // True ó False
  }

  // Obtener el observador del usuario actual
  get currentUser(): Observable<firebase.User | null> {
    return this.user;
  }

  // Autenticación con Facebook
  authWithFacebook(): Promise<firebase.auth.UserCredential> {
    const provider: firebase.auth.FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
    // provider.addScope('user_birthday');
    return this.afAuth.signInWithPopup(provider);
  }

  // Finalizar sesión
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }
}
