import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User();
  loggedUser: User;
  // email: '';
  // password: string;
  // name: string;
  // surname: string;
  userId: string;

  isLogged = false;
  loading = true;
  constructor(private userService: UserService, private appService: AppService, private router: Router) {
	  

   }

  ngOnInit() {

    if (this.user.createdAt !== null || this.user.createdAt !== undefined) {
      this.loggedUser = this.userService.getLoggedUser();

      console.log('nell init, user > ' + JSON.stringify(this.user));
    }
  }

  login(): void {
    console.log('nel login del component, user > ' + JSON.stringify(this.user))
    this.userService.login(this.user, this.callbackLoginOnSuccess.bind(this), this.callbackLoginOnFailure.bind(this));
  }

  logOut(): void {

    // svuoto lo user e lo setto nel localstorage
    this.loggedUser = null;
    this.userService.setLoggedUser(this.loggedUser);
    console.log('nel log out, user > ' + JSON.stringify(this.user))
  }

  register(): void {

    console.log('nel register >' + this.user.name);

    // notare in caso di successo chiamo il callback del login, cosi da loggare l'utente una volta registrato
    this.userService.register(this.user, this.callbackLoginOnSuccess.bind(this), this.callbackOnRegisterFailure.bind(this));
  }

  callbackLoginOnSuccess(data: any): void {

    if  (data !== null) {
      this.loggedUser = data;
      console.log('nel login success, user > ' + JSON.stringify(this.loggedUser));
      this.userService.setLoggedUser(this.loggedUser);
    }
  }

  callbackLoginOnFailure(data: any): any {
    console.log('nel cal back Login failure > ' + JSON.stringify(data));
  }

  callbackOnRegisterFailure(data: any): any {
    console.log('nel cal back Register failure > ' + JSON.stringify(data));
  }

  changeLoading(): any {

  }

  findAuctionsByUser(): any {
    console.log('nel findAuctionsByUser id user > ' + this.userId)
    this.userService.findAuctionsByUser(this.userId, this.callbackLoginOnSuccess.bind(this), this.callbackOnRegisterFailure.bind(this));
  }

}
