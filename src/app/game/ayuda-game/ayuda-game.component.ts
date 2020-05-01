import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-ayuda-game",
  templateUrl: "./ayuda-game.component.html",
  styleUrls: ["./ayuda-game.component.css"],
})
export class AyudaGameComponent implements OnInit {
  @Input() imageRoute: string;
  @Input() nameHelp: string;
  constructor() {}

  ngOnInit() {}
}
