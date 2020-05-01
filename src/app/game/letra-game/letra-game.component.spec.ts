import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetraGameComponent } from './letra-game.component';

describe('LetraGameComponent', () => {
  let component: LetraGameComponent;
  let fixture: ComponentFixture<LetraGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetraGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetraGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
