import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ApiService } from '../api/api.service';
import { User } from 'src/app/models/user/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  user: User = new User();

  constructor(http: HttpClient) {
    super(http);
   }
   find(callbackOnSuccess: any, callbackOnFailure: any) {
     this.doGet('user/find', callbackOnSuccess, callbackOnFailure);
   }
   
   login(model: User, callbackOnSuccess: any, callbackOnFailure: any) {
     console.log('nel login del service, user > ' + JSON.stringify(model))
     this.doPost('user/login', model, callbackOnSuccess, callbackOnFailure);
   }

   checkOtp(model: User, callbackCheckOtpOnSuccess: any, callbaCkcheckOtpOnFailure: any) {
     console.log('nel checkOtp del service, user > ' + JSON.stringify(model))
     this.doPost('user/checkOtp', model, callbackCheckOtpOnSuccess, callbaCkcheckOtpOnFailure);
   }

  register(model: User, callbackOnSuccess: any, callbackOnFailure: any) {
    this.doPost('user/register', model, callbackOnSuccess, callbackOnFailure);
  }

  findAuctionsByUser(id: string, onCallbackSuccess: any, onCallbackFailure: any) {
     this.doPost('auction/findAuctionsByUser', id, onCallbackFailure, onCallbackSuccess);
  }

  public setLoggedUser(user: User): void {
    if (user !== undefined) {
      window.localStorage.setItem('loggedUser', JSON.stringify((user)));
    }
  }

  public getLoggedUser(): User {
    console.log('dentro il get logged user > ' + JSON.stringify(this.user));
    const model = JSON.parse(window.localStorage.getItem('loggedUser'));
    return model;
  }

}
