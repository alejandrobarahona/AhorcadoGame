import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresGameComponent } from './jugadores-game.component';

describe('JugadoresGameComponent', () => {
  let component: JugadoresGameComponent;
  let fixture: ComponentFixture<JugadoresGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadoresGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
