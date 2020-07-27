import { Component, OnInit } from '@angular/core';
import { InfogameService, UserInfo } from '../../services/infogame.service';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import Swal from 'sweetalert2';
import { InfoFirebaseService } from '../../services/info-firebase.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styles: [],
})
export class FriendsComponent implements OnInit {
  friendsList: any;
  user: SocialUser;
  loggedIn: boolean;
  constructor(
    public infGame: InfogameService,
    private router: Router,
    private authService: SocialAuthService
  ) {}

  ngOnInit(): void {
    if (this.infGame.userInfo.Id === undefined) {
      this.router.navigate(['/home']);
    }
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;

      if (!this.loggedIn) {
        this.router.navigate(['/home']);
      } else {
        this.getInfoFriends();
        this.infGame.getFriends(this.user.id, this.user.authToken).subscribe(
          (dataFrd: any) => {
            // Success
            console.log(dataFrd);
            this.infGame.updateInfoUser({ Id: this.user.id, Objeto: dataFrd });
            const friendFB = dataFrd.data;
            console.log(friendFB);
            this.infGame.userInfo.Friends.splice(
              0,
              this.infGame.userInfo.Friends.length
            );
            friendFB.forEach((element) => {
              this.infGame.userInfo.Friends.push(element.Id);
            });

            console.log(this.infGame.userInfo.Friends);

            // Actualizar campo Friend
            // this.infGame.updateInfoUser(this.infGame.userInfo);
          },
          (error) => {
            console.error(error);
          }
        );
      }
    });
  }

  getInfoFriends() {
    //Obtener la info de los Amigos
    this.friendsList = new Array<InfoFriend>();
    this.infGame
      .getDataByDocId('Players', '10158482265712008')
      .subscribe((userData: any) => {
        const amigos: any = userData.payload.data().Friends;
        // console.log(amigos);
        amigos.forEach((element: string) => {
          // console.log(element);
          this.infGame
            .getDataByDocId('Players', element)
            .subscribe((infoFriend: any) => {
              const friend = new InfoFriend();
              friend.Id = infoFriend.payload.data().Id;
              friend.FirstName = infoFriend.payload.data().FirstName;
              friend.PhotoUrl = infoFriend.payload.data().PhotoUrl;
              friend.MaxScore = infoFriend.payload.data().MaxScore;
              friend.OnLine = infoFriend.payload.data().OnLine;
              this.friendsList.push(friend);
            });
        });
        // console.log(this.friendsList);
      });
  }

  /**
   * Eliminar la información del usuario logeado
   */
  deleteInfoUser() {
    Swal.fire({
      title: 'Darse de baja',
      text: '¿Quieres eliminar toda tu información de nuestro juego?',
      icon: 'error',
      showCancelButton: true,
      cancelButtonText: 'No, me quedaré',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrala',
    }).then((result) => {
      if (result.value) {
        this.infGame
          .deleteInfoUser('10158482265712008')
          .then((resultSwal) => {
            Swal.fire({
              title: 'Usuario eliminado',
              showConfirmButton: false,
              timer: 1000,
            }).then((result) => {
              console.log(`Resultado: ${result}`);
              this.infGame.rachaMaxima = 0;
              this.infGame.rachaGanadora = 0;
              this.authService.signOut().then((result) => {
                console.log(`SignOut: ${result}`);
                this.router.navigate(['/home']);
              });
            });
            return result;
          })
          .catch((error) => {
            console.log(error);
            return `Se presentó el siguiete error con la eliminación del usuario ${error}`;
          });
        console.log();
      } else {
        Swal.fire({
          title: 'Gracias por no abandonarnos',
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  }
}

class InfoFriend {
  Id: string;
  FirstName: string;
  PhotoUrl: string;
  MaxScore: number;
  OnLine: boolean;
}
