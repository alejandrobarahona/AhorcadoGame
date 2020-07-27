import { Component, OnInit, Input } from '@angular/core';
import { InfogameService } from '../../../services/infogame.service';

@Component({
  selector: 'app-letra-game',
  templateUrl: './letra-game.component.html',
  styles: [],
})
export class LetraGameComponent implements OnInit {
  @Input() state: string;
  @Input() letter: string;
  @Input() class: string;

  constructor(private infGame: InfogameService) {}

  ngOnInit(): void {}

  setStateLetter(): boolean {
    if (this.state === 'enabled') {
      return true;
    }
    return false;
  }

  eventLetter(event: any) {
    this.infGame.validateLetter(event.target.name);
    this.setStateLetter();
  }
}
