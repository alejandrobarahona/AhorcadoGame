import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { InfogameService } from '../../../services/infogame.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ahorcado-game',
  templateUrl: './ahorcado-game.component.html',
  styles: [],
})
export class AhorcadoGameComponent implements OnInit {
  @Output() onComplete = new EventEmitter<void>();
  private subObject: Subscription = null;
  imgRoutes: string;

  constructor(private infGame: InfogameService) {}

  ngOnInit(): void {
    this.subObject = this.infGame.obsObject$.subscribe(() => {
      this.onComplete.emit();
      this.getNextImage();
      if (this.infGame.LetterNoWord.length >= 6 && this.infGame.finishGame) {
        this.infGame.lostGame = true;
        this.infGame.rachaGanadora = 0;
        Swal.fire('Perdiste', `La palabra era: ${this.infGame.word}`, 'error');
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
