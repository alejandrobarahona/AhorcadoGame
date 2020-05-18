import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../../servicios/facebook.service';

@Component({
  selector: 'app-login-redes-sociales',
  templateUrl: './login-redes-sociales.component.html',
  styleUrls: ['./login-redes-sociales.component.css'],
})
export class LoginRedesSocialesComponent implements OnInit {
  constructor(private facebookService: FacebookService) {}

  ngOnInit() {}

  onLoginFacebook() {
    console.log('Facebook');
    this.facebookService.authWithFacebook().then((rest) => {
      console.log(rest);
    });
  }
}
