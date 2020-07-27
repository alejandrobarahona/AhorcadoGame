import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { InfogameService } from '../../../services/infogame.service';

@Component({
  selector: 'app-palabras-game',
  templateUrl: './palabras-game.component.html',
  styles: [],
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
