import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User;
  email: string;
  password: string;
  name: string;
  surname: string;

  isLogged = false;
  loading = true;
  constructor(private userService: UserService, private appService: AppService) { }

  ngOnInit() {
    // this.appService.onLoginStatusChanged.emit(true);
  }

  login() {
    this.appService.onLoginStatusChanged.emit(true);
  }
  logOut() {

  }
  register() {

  }
  changeLoading() {
  }

}
