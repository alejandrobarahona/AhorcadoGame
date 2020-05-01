import {
  Component,
  OnInit,
  Output,
  OnDestroy,
  EventEmitter,
} from '@angular/core';
import { InfogameService } from '../../servicios/infogame.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-letras-game',
  templateUrl: './letras-game.component.html',
  styleUrls: ['./letras-game.component.css'],
})
export class LetrasGameComponent implements OnInit {
  @Output() onComplete = new EventEmitter<void>();
  private subObjectAlphabet: Subscription = null;

  constructor(public infGame: InfogameService) {}

  ngOnInit() {
    this.subObjectAlphabet = this.infGame.obsObjAlph$.subscribe(() => {
      this.onComplete.emit();
    });
  }

  ngOnDestroy() {
    this.subObjectAlphabet.unsubscribe();
  }
}
