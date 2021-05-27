import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

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
   insert(model: User, onCallbackSuccess: any, onCallbackFailure: any) {
     this.doPost('user/insert', model, onCallbackFailure, onCallbackSuccess);
   }
}
