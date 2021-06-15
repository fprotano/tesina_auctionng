import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user/user';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedUser: User;
  // logged = false;

  constructor(private appService: AppService, private userService: UserService, private userComponent: UserComponent) {


    // this.appService.onLoginStatusChanged.subscribe((logged: boolean) => {
    //   this.logged = logged;
    // });
  }

  ngOnInit() {
     this.loggedUser = this.userService.getLoggedUser();

  }

  logout() {
    this.userComponent.logOut();
  }


}
