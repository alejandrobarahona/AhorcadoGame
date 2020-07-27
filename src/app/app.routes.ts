import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TablerodejuegoGameComponent } from './components/game/tablerodejuego-game/tablerodejuego-game.component';
import { FriendsComponent } from './components/friends/friends.component';
import { PoliticaComponent } from './components/game/politica/politica.component';

export const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tableGame',
    component: TablerodejuegoGameComponent,
  },
  {
    path: 'friends',
    component: FriendsComponent,
  },
  {
    path: 'politica',
    component: PoliticaComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
