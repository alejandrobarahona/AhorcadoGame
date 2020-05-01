import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRedesSocialesComponent } from './login-redes-sociales.component';

describe('LoginRedesSocialesComponent', () => {
  let component: LoginRedesSocialesComponent;
  let fixture: ComponentFixture<LoginRedesSocialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRedesSocialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRedesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
