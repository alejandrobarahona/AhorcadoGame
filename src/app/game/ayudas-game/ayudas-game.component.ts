import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayudas-game',
  templateUrl: './ayudas-game.component.html',
  styleUrls: ['./ayudas-game.component.css'],
})
export class AyudasGameComponent implements OnInit {
  InfoHelp = new Array<Help>();
  constructor() {}

  ngOnInit() {
    var newHelp = new Help();
    newHelp.name = 'Ayuda Uno';
    newHelp.route = '../../assets/helpOne.png';
    this.InfoHelp.push(newHelp);
    newHelp = new Help();
    newHelp.name = 'Ayuda Dos';
    newHelp.route = '../../assets/helpTwo.png';
    this.InfoHelp.push(newHelp);
    newHelp = new Help();
    newHelp.name = 'Ayuda Tres';
    newHelp.route = '../../assets/helpThree.png';
    this.InfoHelp.push(newHelp);
    newHelp = new Help();
    newHelp.name = 'No sirven estas ayudas';
    newHelp.route = '../../assets/helpThree.png';
    this.InfoHelp.push(newHelp);
  }
}

class Help {
  name: string;
  route: string;
}
