import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  model: User = null;
  err: string = null;
  errCode: string = null;

  constructor(private userService: UserService) { }

  onLoadSuccess(data: any){
    this.model = data;
  }
  onLoadFailure(err: string, errCode: string){
    this.err = err;
    this.errCode = errCode;
  }

  ngOnInit() {
    this.userService.find(this.onLoadSuccess.bind(this), this.onLoadFailure.bind(this));
  }

}
