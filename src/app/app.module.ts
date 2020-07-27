import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// Social
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// SweetAlert
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TablerodejuegoGameComponent } from './components/game/tablerodejuego-game/tablerodejuego-game.component';
import { PalabrasGameComponent } from './components/game/palabras-game/palabras-game.component';
import { LetrasGameComponent } from './components/game/letras-game/letras-game.component';
import { LetrajuegoGameComponent } from './components/game/letrajuego-game/letrajuego-game.component';
import { LetraGameComponent } from './components/game/letra-game/letra-game.component';
import { AhorcadoGameComponent } from './components/game/ahorcado-game/ahorcado-game.component';
import { AhorcadoimageGameComponent } from './components/game/ahorcadoimage-game/ahorcadoimage-game.component';
import { FriendsComponent } from './components/friends/friends.component';
import { PoliticaComponent } from './components/game/politica/politica.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TablerodejuegoGameComponent,
    PalabrasGameComponent,
    LetrasGameComponent,
    LetrajuegoGameComponent,
    LetraGameComponent,
    AhorcadoGameComponent,
    AhorcadoimageGameComponent,
    FriendsComponent,
    PoliticaComponent,
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('690371951804044'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
