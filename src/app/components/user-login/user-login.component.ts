import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User;
  email: string;
  password: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.onLoginStatusChanged.emit(true);
  }
  doLogin(){
    if(this.email== this.email && this.password == this.password ){
      alert("ok")
    }else{
      ("errore")
    }
  }

}
