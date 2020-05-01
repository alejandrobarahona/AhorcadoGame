import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-jugador-game",
  templateUrl: "./jugador-game.component.html",
  styleUrls: ["./jugador-game.component.css"],
})
export class JugadorGameComponent implements OnInit {
  @Input() name: string;
  @Input() level: string;
  constructor() {}

  ngOnInit() {}
}
