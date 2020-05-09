import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { PalabrasGameComponent } from '../app/game/palabras-game/palabras-game.component';
import { AhorcadoGameComponent } from '../app/game/ahorcado-game/ahorcado-game.component';
import { AyudasGameComponent } from '../app/game/ayudas-game/ayudas-game.component';
import { LetrasGameComponent } from '../app/game/letras-game/letras-game.component';
import { JugadoresGameComponent } from '../app/game/jugadores-game/jugadores-game.component';
import { CategoriasGameComponent } from '../app/game/categorias-game/categorias-game.component';
import { JugadorGameComponent } from '../app/game/jugador-game/jugador-game.component';
import { AyudaGameComponent } from '../app/game/ayuda-game/ayuda-game.component';
import { LetraGameComponent } from '../app/game/letra-game/letra-game.component';
import { SocketioService } from './servicios/socketio.service';
import { LetrajuegoGameComponent } from '../app/game/letrajuego-game/letrajuego-game.component';
import { AhorcadoimageGameComponent } from '../app/game/ahorcadoimage-game/ahorcadoimage-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablerodejuegoGameComponent } from '../app/game/tablerodejuego-game/tablerodejuego-game.component';
import { FacebookComponent } from './initComponents/facebook/facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    PalabrasGameComponent,
    AhorcadoGameComponent,
    AyudasGameComponent,
    LetrasGameComponent,
    JugadoresGameComponent,
    CategoriasGameComponent,
    JugadorGameComponent,
    AyudaGameComponent,
    LetraGameComponent,
    LetrajuegoGameComponent,
    AhorcadoimageGameComponent,
    TablerodejuegoGameComponent,
    FacebookComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
