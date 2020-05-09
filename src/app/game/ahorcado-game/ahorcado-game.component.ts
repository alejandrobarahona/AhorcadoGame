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
  selector: 'app-ahorcado-game',
  templateUrl: './ahorcado-game.component.html',
  styleUrls: ['./ahorcado-game.component.css'],
})
export class AhorcadoGameComponent implements OnInit {
  @Output() onComplete = new EventEmitter<void>();
  private subObject: Subscription = null;
  imgRoutes: string;

  constructor(private infGame: InfogameService) {}

  ngOnInit() {
    this.subObject = this.infGame.obsObject$.subscribe(() => {
      this.onComplete.emit();
      this.getNextImage();
      if (this.infGame.LetterNoWord.length >= 6 && this.infGame.finishGame) {
        this.infGame.lostGame = true;
        this.infGame.rachaGanadora = 0;
        alert(`Perdiste era: ${this.infGame.word}`);
      }
    });
  }

  getNextImage() {
    this.imgRoutes = this.infGame.setImageToNoLetter(
      this.infGame.LetterNoWord.length
    );
  }

  ngOnDestroy() {
    this.subObject.unsubscribe();
  }
}
