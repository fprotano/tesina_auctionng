import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';
// import { HelpCenterThreadService} from 'src/app/services/helpCenterThread/help-center-thread.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user/user';
import { HelpCenter } from 'src/app/models/helpCenter/help-center';
// import { HelpCenterThread } from 'src/app/models/helpCenterThread/help-center-thread';
import { HttpClient } from '@angular/common/http';
import { Staff } from 'src/app/models/staff/staff';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.css']
})
export class HelpCenterComponent implements OnInit {

  loggedUser: User = new User();
  helpCenter: HelpCenter = new HelpCenter();
  helpCenterMessage: string;
  listHelpCenter: Array <HelpCenter> = new Array <HelpCenter>();

  constructor(private userService: UserService,
              private helpCenterService: HelpCenterService
              ) { }

  ngOnInit() {

    this.loggedUser = this.userService.getLoggedUser();
    this.helpCenterService.findAllUserHelpCenter(this.loggedUser.id, this.callbackOnSuccessList.bind(this),
                                                  this.callbackOnFailureList.bind(this));
  }

    insertHelpCenter() {
      this.helpCenter.userId = this.loggedUser.id;
      console.log('dentro insert question, helpCenter >' + JSON.stringify(this.helpCenter));
      console.log('logged user: ' + this.loggedUser.id);
      this.helpCenterService.insertQuestion(this.helpCenter, this.callbackOnSuccessInsert.bind(this),
                                          this.callbackOnFailureInsert.bind(this));
  }

  callbackOnSuccessInsert(data: any) {
    this.helpCenter = data;
    this.helpCenterMessage = 'richiesta creata con successo';
    console.log('nel callbackOnSuccessInsert');
  }

  callbackOnFailureInsert(data: any) {
    console.log('nel callbackOnFailureInsert');
  }

  callbackOnSuccessList(data: any) {
    this.helpCenterService.setListHelpCenter(data);
    this.listHelpCenter = data;
    // console.log('listHelpCenter ' + JSON.stringify(data));
  }

  callbackOnFailureList(data: any) {
    console.log('nel callbackOnFailureList');
  }



}
