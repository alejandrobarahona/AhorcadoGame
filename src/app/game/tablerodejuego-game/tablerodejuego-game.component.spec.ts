import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TablerodejuegoGameComponent } from "./tablerodejuego-game.component";

describe("TablerodejuegoGameComponent", () => {
  let component: TablerodejuegoGameComponent;
  let fixture: ComponentFixture<TablerodejuegoGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TablerodejuegoGameComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablerodejuegoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
