import { Component, OnInit } from '@angular/core';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user/user';
import { HelpCenter } from 'src/app/models/helpCenter/help-center';
import { HelpCenterDTO } from 'src/app/models/helpCenterDTO/help-center-DTO';
// import { HttpClient } from '@angular/common/http';
// import { Staff } from 'src/app/models/staff/staff';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.css']
})
export class HelpCenterComponent implements OnInit {

  loggedUser: User = new User();
  helpCenter: HelpCenter = new HelpCenter();
  topic:  HelpCenter = new HelpCenter();
  helpCenterMessage: string;
  listHelpCenter: Array <HelpCenter> = new Array <HelpCenter>();
  listHelpCenterDTO: Array <HelpCenterDTO> = new Array <HelpCenterDTO>();

  constructor(private userService: UserService,
              private helpCenterService: HelpCenterService,
              private router: Router
              ) { }

  ngOnInit() {

    this.loggedUser = this.userService.getLoggedUser();
    this.helpCenterService.findAllUserHelpCenter(this.loggedUser.id, this.callbackOnSuccessList.bind(this),
                                                  this.callbackOnFailureList.bind(this));

  }

    insertHelpCenter() {
      this.helpCenter.userId = this.loggedUser.id;
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
    this.listHelpCenterDTO = data;
  }

  callbackOnFailureList(data: any) {
    console.log('nel callbackOnFailureList');
  }

  setTopic( topic: HelpCenterDTO): void {
    console.log('nel setTopic, helpCenterDTO: '+JSON.stringify(topic.helpThreads));
    this.helpCenterService.setHelpCenter(topic);
    console.log('nel setTopic, helpCenterDTO: '+JSON.stringify(this.helpCenterService.getHelpCenter()));
    this.router.navigate(['/helpCenterThreads']);
  }


}
