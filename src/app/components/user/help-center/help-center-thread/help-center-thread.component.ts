import { Component, OnInit } from '@angular/core';
import { HelpCenterThread } from "src/app/models/helpCenterThread/help-center-thread";
import { HelpCenterThreadService } from "src/app/services/helpCenterThread/help-center-thread.service";


@Component({
  selector: 'app-help-center-thread',
  templateUrl: './help-center-thread.component.html',
  styleUrls: ['./help-center-thread.component.css']
})
export class HelpCenterThreadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
