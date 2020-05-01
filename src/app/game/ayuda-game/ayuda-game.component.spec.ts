import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaGameComponent } from './ayuda-game.component';

describe('AyudaGameComponent', () => {
  let component: AyudaGameComponent;
  let fixture: ComponentFixture<AyudaGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudaGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
