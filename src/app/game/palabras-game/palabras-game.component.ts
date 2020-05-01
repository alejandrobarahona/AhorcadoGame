import {
  Component,
  OnInit,
  Input,
  Output,
  OnDestroy,
  EventEmitter,
} from '@angular/core';
import { InfogameService } from '../../servicios/infogame.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-palabras-game',
  templateUrl: './palabras-game.component.html',
  styleUrls: ['./palabras-game.component.css'],
})
export class PalabrasGameComponent implements OnInit, OnDestroy {
  @Output() onComplete = new EventEmitter<void>();

  private subObjWords: Subscription = null;

  constructor(public infGame: InfogameService) {}

  ngOnInit() {
    this.subObjWords = this.infGame.obsObjWords$.subscribe(() => {
      this.onComplete.emit();
    });
  }

  ngOnDestroy() {
    this.subObjWords.unsubscribe();
  }
}
