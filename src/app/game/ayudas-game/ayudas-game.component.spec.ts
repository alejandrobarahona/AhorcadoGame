import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudasGameComponent } from './ayudas-game.component';

describe('AyudasGameComponent', () => {
  let component: AyudasGameComponent;
  let fixture: ComponentFixture<AyudasGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudasGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudasGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
