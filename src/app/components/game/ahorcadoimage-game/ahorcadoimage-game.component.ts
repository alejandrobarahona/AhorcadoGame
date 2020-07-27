import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ahorcadoimage-game',
  templateUrl: './ahorcadoimage-game.component.html',
  styles: [],
})
export class AhorcadoimageGameComponent implements OnInit {
  @Input() imageRoute: string;
  constructor() {}

  ngOnInit(): void {}
}
