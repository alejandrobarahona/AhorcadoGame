import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorGameComponent } from './jugador-game.component';

describe('JugadorGameComponent', () => {
  let component: JugadorGameComponent;
  let fixture: ComponentFixture<JugadorGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadorGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
