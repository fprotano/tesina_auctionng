import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { HelpCenter } from 'src/app/models/helpCenter/help-center';

@Injectable({
  providedIn: 'root'
})
export class HelpCenterService extends ApiService {
  private listHelpCenter: Array<HelpCenter> = new Array<HelpCenter>();
  private helpCenter: HelpCenter = new HelpCenter();

  constructor(http: HttpClient) {
    super(http);
  }

  public setListHelpCenter(data: any): void {
    this.listHelpCenter = data;
  }

  public getListHelpCenter(): Array<HelpCenter> {
    return this.listHelpCenter;
  }

  public setHelpCenter(data: HelpCenter): void {
    this.helpCenter = data;
  }

  public getHelpCenter(): HelpCenter {
    return this.helpCenter;
  }

  findAllUserHelpCenter(userId: Number, callbackOnSuccess: any, callbackOnFailure: any){
    this.doGet('helpCenter/fAOfUs/'+userId, callbackOnSuccess, callbackOnFailure);
  }

  insertQuestion(model: HelpCenter, callbackOnSuccess: any, callbackOnFailure: any) {
    this.doPost('helpCenter/insert', model, callbackOnSuccess, callbackOnFailure);
  }
}
