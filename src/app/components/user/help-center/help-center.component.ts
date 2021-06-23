import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';
// import { HelpCenterThreadService} from 'src/app/services/helpCenterThread/help-center-thread.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user/user';
import { HelpCenter } from 'src/app/models/helpCenter/help-center';
// import { HelpCenterThread } from 'src/app/models/helpCenterThread/help-center-thread';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.css']
})
export class HelpCenterComponent implements OnInit {

  loggedUser: User = new User();
  helpCenter: HelpCenter = new HelpCenter();
  helpCenterMessage: string;

  constructor(private userService: UserService, 
              private helpCenterService: HelpCenterService
              ) { }

  ngOnInit() {

    this.loggedUser = this.userService.getLoggedUser();
  }

    insertHelpCenter() {
      this.helpCenter.userId=this.loggedUser.id;
   console.log('dentro insert question, helpCenter >' + JSON.stringify(this.helpCenter));
   console.log('logged user: '+this.loggedUser.id); 
   this.helpCenterService.insertQuestion(this.helpCenter, this.callbackOnSuccess.bind(this),
                                          this.callbackOnFailure.bind(this));
  }

  callbackOnSuccess(data: any) {
    this.helpCenter = data;
    this.helpCenterMessage = 'richiesta creata con successo';
    console.log('nel callbackOnSuccess');
  }

  callbackOnFailure(data: any) {
    console.log('nel callbackOnFailure');
  }

}
