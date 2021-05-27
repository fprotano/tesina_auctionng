import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Fake } from '../models/fake';
@Injectable({
  providedIn: 'root'
})
export class FakeService extends ApiService {

  constructor(http: HttpClient) {

    super(http);
   }
   find(onCallbackSuccess:any,onCallbackFailure:any){
      this.doGet("fake/find",onCallbackSuccess,onCallbackFailure);
   }
   insert(model:Fake,onCallbackSuccess:any,onCallbackFailure:any){
      this.doPost("fake/insert",model,onCallbackSuccess,onCallbackFailure);
   }
   
}
