import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HelpCenterDTO } from 'src/app/models/helpCenterDTO/help-center-DTO';
import { HelpCenterThreadDTO } from "src/app/models/helpCenterThreadDTO/help-center-thread-DTO";
import { HelpCenterThread } from 'src/app/models/helpCenterThread/help-center-thread';
import { HelpCenterThreadService } from "src/app/services/helpCenterThread/help-center-thread.service";
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-help-center-thread',
  templateUrl: './help-center-thread.component.html',
  styleUrls: ['./help-center-thread.component.css']
})
export class HelpCenterThreadComponent implements OnInit {

  loggedUser: User = new User();
  helpCenterSelected: HelpCenterDTO = new HelpCenterDTO();
  helpCenterThread: HelpCenterThread = new HelpCenterThread();
  listHelpThreads: Array<HelpCenterThreadDTO> = new Array<HelpCenterThreadDTO>();
  helpCenterThraedMessage: String;

  constructor(private userService: UserService,
              private helpCenterService: HelpCenterService, 
              private helpCenterThreadService: HelpCenterThreadService ) { }

  ngOnInit() {
    this.loggedUser = this.userService.getLoggedUser();
    this.helpCenterSelected = this.helpCenterService.getHelpCenter();
    this.listHelpThreads = this.helpCenterSelected.helpThreads;
    console.log('helpCenterThraedMessage: ')+JSON.stringify(this.listHelpThreads);
  }

  insertHelpCenterThread(){
    this.helpCenterThread.helpCenterId=this.helpCenterSelected.id;
      console.log('dentro insertHelpCenterThread, helpCenterSelected >' + JSON.stringify(this.helpCenterSelected));
      console.log('dentro insertHelpCenterThread, HelpCenterThread >' + JSON.stringify(this.helpCenterThread));
      console.log('logged user: ' + this.loggedUser.id);
    this.helpCenterThreadService.insertThread(this.helpCenterThread, 
                                              this.callbackOnSuccessInsert.bind(this),
                                              this.callbackOnFailureInsert.bind(this))

  }

  callbackOnSuccessInsert(data: any) {
    console.log('nel callbackOnSuccessInsert');
    this.helpCenterThread = data;
    this.helpCenterThraedMessage = 'messaggio inviato con successo';
  }

  callbackOnFailureInsert(data: any) {
    console.log('nel callbackOnFailureInsert');
    this.helpCenterThraedMessage = 'errore nell\'invio del messaggio';
  }

}
