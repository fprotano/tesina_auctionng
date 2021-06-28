import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';


@Injectable()
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User();
  loggedUser: User;
  checkOtpUser: User;
  userId: string;

  loading = true;
  invoiceView = false;
  autionOrderView = false;
  question = [
    { name: 'Il nome del tuo primo animale domestico' },
    { name: 'Il nome del tuo dolce preferito' },
    { name: 'La marca della tua prima macchina' }
  ];


  constructor(private userService: UserService, private router: Router) {


  }

  ngOnInit() {

    if (this.user.createdAt !== null || this.user.createdAt !== undefined) {
      this.loggedUser = this.userService.getLoggedUser();

      console.log('nell init, user > ' + JSON.stringify(this.user));
    }
  }

  checkOtp(): void {
    console.log('nel checkOtp del component, checkOtp > ' + JSON.stringify(this.user))
    this.userService.checkOtp(this.user, this.callbackCheckOtpOnSuccess.bind(this), this.callbaCkcheckOtpOnFailure.bind(this));
  }

  login(): void {
    console.log('nel login del component, checkOtpUser > ' + JSON.stringify(this.user))
    this.userService.login(this.checkOtpUser, this.callbackLoginOnSuccess.bind(this), this.callbackLoginOnFailure.bind(this));
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

    if (data !== null) {
      this.loggedUser = data;
      console.log('nel login success, loggedUser > ' + JSON.stringify(this.loggedUser));
      this.userService.setLoggedUser(this.loggedUser);
      window.location.replace('/home');
    }
  }

  callbackCheckOtpOnSuccess(data: any): void {

    console.log('nel checkOtp success data ---- > ' + JSON.stringify(data));
    if (data !== null) {
      this.checkOtpUser = data;
      // se non c'e' otp vuol dire che e' richiesto, quindi lascia la variabile settata e ritorna
      if (this.checkOtpUser.otpCode === null) {
        console.log('nel checkOtp success checkOtpUser ---- > ' + JSON.stringify(this.checkOtpUser));
        return;
      }
      // se l'otp c'e' vuol dire che non e' richiesto, quindi setta undefined la variabile
      // e chiama il callback del login, eseguendo una normale login
      console.log('il checkotp se non serve lopt ----> ' + JSON.stringify(this.checkOtpUser));
      this.checkOtpUser = undefined;
      this.callbackLoginOnSuccess(data)
    }
  }

  callbaCkcheckOtpOnFailure(data: any): any {
    console.log('nel cal back checkOtpUser failure > ' + JSON.stringify(data));
  }

  callbackLoginOnFailure(data: any): any {
    console.log('nel cal back Login failure > ' + JSON.stringify(data));
  }

  callbackOnRegisterFailure(data: any): any {
    console.log('nel cal back Register failure > ' + JSON.stringify(data));
  }

  findAuctionsByUser(): any {
    console.log('nel findAuctionsByUser id user > ' + this.userId)
    this.userService.findAuctionsByUser(this.userId, this.callbackLoginOnSuccess.bind(this), this.callbackOnRegisterFailure.bind(this));
  }

  changeInvoiceView(): void {
    if (!this.invoiceView) {
      this.invoiceView = true;
    } else {
      this.invoiceView = false;
    }
  }

  changeAutionOrderView(): void {
    if (!this.autionOrderView) {
      this.autionOrderView = true;
    } else {
      this.autionOrderView = false;
    }
  }

}
