import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-jugadores-game",
  templateUrl: "./jugadores-game.component.html",
  styleUrls: ["./jugadores-game.component.css"],
})
export class JugadoresGameComponent implements OnInit {
  players: Observable<any[]>;
  constructor() {
    // this.players = firestore.collection("Players").valueChanges();
  }

  ngOnInit() {}
}
