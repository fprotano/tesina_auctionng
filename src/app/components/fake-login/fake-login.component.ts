import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-fake-login',
  templateUrl: './fake-login.component.html',
  styleUrls: ['./fake-login.component.css']
})
export class FakeLoginComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.onLoginStatusChanged.emit(true);
  }

}
