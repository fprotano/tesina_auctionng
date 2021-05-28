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
