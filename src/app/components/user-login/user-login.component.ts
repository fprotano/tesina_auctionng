import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User;
  email: string;
  password: string;
  message: any
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.appService.onLoginStatusChanged.emit(true);
  }
  doLogin() {
    let user = this.appService.login(this.email, this.password);
    user.subscribe(data => {
      this.message = data;
      this.router.navigate(["/home"])
    });
  }

}
