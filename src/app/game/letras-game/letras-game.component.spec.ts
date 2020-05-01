import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrasGameComponent } from './letras-game.component';

describe('LetrasGameComponent', () => {
  let component: LetrasGameComponent;
  let fixture: ComponentFixture<LetrasGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetrasGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetrasGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
