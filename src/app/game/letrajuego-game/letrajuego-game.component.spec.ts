import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrajuegoGameComponent } from './letrajuego-game.component';

describe('LetrajuegoGameComponent', () => {
  let component: LetrajuegoGameComponent;
  let fixture: ComponentFixture<LetrajuegoGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetrajuegoGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetrajuegoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
