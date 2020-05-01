import { Component, OnInit, Input } from '@angular/core';
// import { SocketioService } from "../../servicios/socketio.service";
import { InfogameService } from '../../servicios/infogame.service';

@Component({
  selector: 'app-letra-game',
  templateUrl: './letra-game.component.html',
  styleUrls: ['./letra-game.component.css'],
})
export class LetraGameComponent implements OnInit {
  @Input() state: string;
  @Input() letter: string;
  @Input() class: string;

  constructor(
    // private socketService: SocketioService,
    private infGame: InfogameService
  ) {}

  ngOnInit() {}

  setStateLetter(): boolean {
    if (this.state == 'enabled') {
      return true;
    }
    return false;
  }

  eventLetter(event: any) {
    this.infGame.validateLetter(event.target.name);
    this.setStateLetter();
  }
}
