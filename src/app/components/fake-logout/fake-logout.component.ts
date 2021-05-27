import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-fake-logout',
  templateUrl: './fake-logout.component.html',
  styleUrls: ['./fake-logout.component.css']
})
export class FakeLogoutComponent implements OnInit {

  constructor(private appService : AppService) { }

  ngOnInit() {
     this.appService.onLoginStatusChanged.emit(false);
  }

}
