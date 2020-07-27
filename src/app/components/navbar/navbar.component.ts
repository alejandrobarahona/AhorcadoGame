import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { InfogameService, UserInfo } from '../../services/infogame.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  public user: SocialUser;
  public loggedIn: boolean;
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    public infGame: InfogameService
  ) {}

  ngOnInit(): void {
    // FB.getLoginStatus((response) => {
    //   this.statusChangeCallback(response);
    // });
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }

  signInWithFB(): void {
    try {
      this.authService
        .signIn(FacebookLoginProvider.PROVIDER_ID)
        .then((result) => {
          // console.log(result);
          this.router.navigate(['/home']);
        });
    } catch (error) {
      console.log(`Login error: ${error}`);
    }
  }

  signOut(): void {
    const offlineUser = {
      Id: this.user.id,
      OnLine: false,
    };
    this.infGame.updateInfoUser(offlineUser);
    this.authService.signOut().then((result) => {
      this.infGame.userInfo = new UserInfo();
      this.infGame.rachaMaxima = 0;
      this.infGame.rachaGanadora = 0;
      this.router.navigate(['/home']);
    });
  }

  // statusChangeCallback(response: any) {
  //   if (response.status === 'connected') {
  //     console.log('connected');
  //   } else {
  //     console.log('else');
  //     this.login();
  //   }
  // }

  // login() {
  //   FB.login(
  //     function (result) {
  //       this.loged = true;
  //       this.token = result;
  //     },
  //     { scope: 'user_friends' }
  //   );
  // }
}
