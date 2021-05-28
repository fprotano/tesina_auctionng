import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ApiService } from '../api/api.service';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
   }
   find(onCallbackSuccess: any, onCallbackFailure: any) {
     this.doGet('user/find', onCallbackFailure, onCallbackSuccess);
   }
   login(model: User, onCallbackSuccess: any, onCallbackFailure: any) {
     this.doPost('user/login', model, onCallbackFailure, onCallbackSuccess);
   }

  register(model: User, callbackOnSuccess: any, callbackOnFailure: any) {
    this.doPost('user/register', model,
    (data: any) => {
      callbackOnSuccess(data);
    }, callbackOnFailure);
  }
}
