import { Component, OnInit } from '@angular/core';
import { InfoFirebaseService } from '../../servicios/info-firebase.service';

@Component({
  selector: 'app-jugadores-game',
  templateUrl: './jugadores-game.component.html',
  styleUrls: ['./jugadores-game.component.css'],
})
export class JugadoresGameComponent implements OnInit {
  players: any;
  constructor(private infFirebase: InfoFirebaseService) {
    if (this.infFirebase.Players != undefined) {
      this.infFirebase.Players.forEach((playerDoc) => {
        this.players = new Array<Player>();
        playerDoc.forEach((player) => {
          if (player.Online) {
            let play = new Player();
            play.Id = player.PlayerId;
            play.Name = player.PlayerName;
            play.State = player.Online;
            this.players.push(play);
          }
        });
      });
    }
  }

  ngOnInit() {}
}

class Player {
  Id: string;
  Name: string;
  State: boolean;
}
