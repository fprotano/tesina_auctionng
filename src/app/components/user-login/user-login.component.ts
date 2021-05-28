import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService, private appService: AppService) { }

  ngOnInit() {
    this.appService.onLoginStatusChanged.emit(true);
  }
  // doLogin(){
  //   if(this.email== this.email && this.password == this.password ){
  //     alert("ok")
  //   }else{
  //     ("errore")
  //   }
  // }
  login(){
    this.appService.onLoginStatusChanged.emit(true);
  }
  logOut(){

  }
  register(){

  }
  changeLoading(){
    
  }

}
