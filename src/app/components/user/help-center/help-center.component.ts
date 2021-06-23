import { Component, OnInit } from '@angular/core';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user/user';
import { HelpCenter } from 'src/app/models/helpCenter/help-center';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.css']
})
export class HelpCenterComponent implements OnInit {

  loggedUser: User = new User();
  helpCenter: HelpCenter = new HelpCenter();

  constructor(private userService: UserService, private helpCenterService: HelpCenterService) { }

  ngOnInit() {

    this.loggedUser = this.userService.getLoggedUser();
  }

  insertQuestion() {
  	console.log('dentro insert question, helpCenter >'+JSON.stringify(this.helpCenter));
	this.helpCenterService.insertQuestion(this.helpCenter, this.callbackOnSuccess.bind(this), 
														this.callbackOnFailure.bind(this));
  }
	
	callbackOnSuccess(data: any){
		console.log('nel callbackOnSuccess');
	}
	
	callbackOnFailure(data: any){
		console.log('nel callbackOnFailure');
	}
	
}
