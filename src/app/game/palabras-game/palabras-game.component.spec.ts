import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalabrasGameComponent } from './palabras-game.component';

describe('PalabrasGameComponent', () => {
  let component: PalabrasGameComponent;
  let fixture: ComponentFixture<PalabrasGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalabrasGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalabrasGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
