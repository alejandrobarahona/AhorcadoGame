import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasGameComponent } from './categorias-game.component';

describe('CategoriasGameComponent', () => {
  let component: CategoriasGameComponent;
  let fixture: ComponentFixture<CategoriasGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
