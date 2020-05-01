import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-letrajuego-game",
  templateUrl: "./letrajuego-game.component.html",
  styleUrls: ["./letrajuego-game.component.css"],
})
export class LetrajuegoGameComponent implements OnInit {
  @Input() showDiv: boolean;
  @Input() letter: string;
  @Input() style: string;

  constructor() {}

  ngOnInit() {}
}
