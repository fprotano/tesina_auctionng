import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User();
  email: '';
  password: string;
  name: string;
  surname: string;
  id: string;

  isLogged = false;
  loading = true;
  constructor(private userService: UserService, private appService: AppService) { }

  ngOnInit() {
    // this.appService.onLoginStatusChanged.emit(true);
  }

  login(): void {
    // ricordare sempre il "bind(this)" che collega la funzione su cui è chiamato, al componente, 
    // altrimenti il this farebbe riferimento solo a cose all'interno della fuznione stessa
    this.userService.login(this.user, this.callbackLoginOnSuccess.bind(this), this.callbackLoginOnFailure.bind(this));
  }

  logOut(): void {

    // // svuoto lo user e lo setto nel localstorage
    // this.user = new User();
    // this.userService.setLoggedUser(this.loggedModel);
  }

  register(): void {

    // notare in caso di successo chiamo il callback del login, cosi da loggare l'utente una volta registrato
    this.userService.register(this.user, this.callbackLoginOnSuccess.bind(this), this.callbackOnRegisterFailure.bind(this));
  }

  callbackLoginOnSuccess(data: any): void {

    // this.user = data;
    // this.userService.setLoggedUser(this.loggedModel); // quando si logga, setto lo user nel loca storage
    // // fa parte del pezzo di codice presente nel costruttore che non uso
    // this.userService.onLoggedUser.emit(true); // gestisce la funzione nell app.componet
    // // this.router.navigate(['']);
  }

  callbackLoginOnFailure(data: any): any {
    console.log(data);
  }

  // callbackRegisterOnSuccess(data: any): void{}

  callbackOnRegisterFailure(data: any): any {
    console.log(data);
  }

  changeLoading(): any {

  }

  findAuctionsByUser(): any {
    this.userService.findAuctionsByUser(this.id, this.callbackLoginOnSuccess.bind(this), this.callbackOnRegisterFailure.bind(this));
  }

}
