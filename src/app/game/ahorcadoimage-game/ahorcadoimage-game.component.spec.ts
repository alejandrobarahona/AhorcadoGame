import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcadoimageGameComponent } from './ahorcadoimage-game.component';

describe('AhorcadoimageGameComponent', () => {
  let component: AhorcadoimageGameComponent;
  let fixture: ComponentFixture<AhorcadoimageGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorcadoimageGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorcadoimageGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
