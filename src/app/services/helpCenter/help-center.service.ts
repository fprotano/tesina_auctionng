import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { HelpCenter } from 'src/app/models/helpCenter/help-center';
import { HelpCenterDTO } from 'src/app/models/helpCenterDTO/help-center-DTO';

@Injectable({
  providedIn: 'root'
})
export class HelpCenterService extends ApiService {
  private listHelpCenterDTO: Array<HelpCenterDTO> = new Array<HelpCenterDTO>();
  private helpCenterDTO: HelpCenterDTO;

  constructor(http: HttpClient) {
    super(http);
  }

  public setListHelpCenter(data: any): void {
    // this.listHelpCenter = data;
    this.listHelpCenterDTO = data;
  }

  public getListHelpCenter(): Array<HelpCenter> {
    // return this.listHelpCenter;
    return this.listHelpCenterDTO;
  }

  public setHelpCenter(data: HelpCenter): void {
    console.log('dentro setHelpCenter, data: '+JSON.stringify(data));
    this.helpCenterDTO = data;
    console.log('dentro setHelpCenter, helpCenterDTO: '+JSON.stringify(this.helpCenterDTO));
  }

  public getHelpCenter(): HelpCenter {
    console.log('dentro getHelpCenter, data: '+JSON.stringify(this.helpCenterDTO));
    return this.helpCenterDTO;
  }

  findAllUserHelpCenter(userId: Number, callbackOnSuccess: any, callbackOnFailure: any){
    this.doGet('helpCenter/fAOfUs/'+userId, callbackOnSuccess, callbackOnFailure);

  }

  insertQuestion(model: HelpCenter, callbackOnSuccess: any, callbackOnFailure: any) {
    this.doPost('helpCenter/insert', model, callbackOnSuccess, callbackOnFailure);
  }
}
