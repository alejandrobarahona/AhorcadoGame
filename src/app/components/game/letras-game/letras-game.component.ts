import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { InfogameService } from '../../../services/infogame.service';

@Component({
  selector: 'app-letras-game',
  templateUrl: './letras-game.component.html',
  styles: [],
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
