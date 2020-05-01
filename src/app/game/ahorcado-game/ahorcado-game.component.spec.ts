import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoGameComponent } from './ahorcado-game.component';

describe('AhorcadoGameComponent', () => {
  let component: AhorcadoGameComponent;
  let fixture: ComponentFixture<AhorcadoGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorcadoGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorcadoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
