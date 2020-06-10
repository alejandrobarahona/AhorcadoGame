import {
  Component,
  OnInit,
  Output,
  OnDestroy,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ahorcado';

  constructor() {}

  ngOnInit() {}
}
