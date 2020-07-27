import { Component, OnInit } from '@angular/core';
import { InfoFirebaseService } from '../../services/info-firebase.service';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { InfogameService, UserInfo } from '../../services/infogame.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  constructor(
    private authService: SocialAuthService,
    public infGame: InfogameService
  ) {}

  ngOnInit(): void {
    this.infGame.rachaGanadora = 0;
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      if (this.loggedIn) {
        this.infGame.getUserInfo().subscribe((docPlayer) => {
          docPlayer.forEach((dataPlayer: any) => {
            if (dataPlayer.payload.doc.id === this.user.id) {
              this.infGame.userInfo = {
                Id: this.user.id,
                Name: this.user.name,
                FirstName: this.user.firstName,
                LastName: this.user.lastName,
                CreateUser: dataPlayer.payload.doc.data().CreateUser,
                OnLine: dataPlayer.payload.doc.data().OnLine,
                Email: this.user.email,
                PhotoUrl: this.user.photoUrl,
                MaxScore: dataPlayer.payload.doc.data().MaxScore,
                LastConnection: dataPlayer.payload.doc.data().LastConnection,
                Token: this.user.authToken,
                Friends: dataPlayer.payload.doc.data().Friends,
              };
              this.infGame.rachaMaxima = dataPlayer.payload.doc.data().MaxScore;
            }
          });
        });

        this.createOrUpdateUser(user.id);
      } else {
        this.infGame.rachaMaxima = 0;
      }
    });
  }

  /**
   * Obtiene la información del usuario logueado
   */
  async createOrUpdateUser(id: string) {
    if (await this.infGame.existUser(id)) {
      // Actualizar el usuario
      const infoUser = {
        Id: this.user.id,
        PhotoUrl: this.user.photoUrl,
        Name: this.user.name,
        OnLine: true,
        LastConnection: new Date(),
      };
      this.infGame.updateInfoUser(infoUser);
      // console.log(this.infGame.userInfo);
    } else {
      // Crear el usuario
      const infoUser = {
        Id: this.user.id,
        FirstName: this.user.firstName,
        Name: this.user.name,
        LastName: this.user.lastName,
        PhotoUrl: this.user.photoUrl,
        Email: this.user.email,
        MaxScore: 0,
        CreateUser: new Date().toString(),
        LastConnection: new Date().toString(),
        OnLine: true,
        Friends: [],
      };

      this.infGame.updateInfoUser(infoUser);
    }
  }
}
