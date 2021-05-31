import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ApiService } from '../api/api.service';
import { User } from 'src/app/models/user/user';

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

  register(model: User, callbackOnSuccess: any, callbackOnFailure: any) {
    this.doPost('user/register', model, callbackOnSuccess, callbackOnFailure);
  }

  findAuctionsByUser(id: string, onCallbackSuccess: any, onCallbackFailure: any) {
     this.doPost('auction/findAuctionsByUser', id, onCallbackFailure, onCallbackSuccess);
  }

  public setLoggedUser(user: User): void {
    if (user !== undefined) {
      window.localStorage.setItem('user', JSON.stringify((user)));
    }
  }

  public getLoggedUser(): User {
    const model = JSON.parse(window.localStorage.getItem('user'));
    return model;
  }
}
