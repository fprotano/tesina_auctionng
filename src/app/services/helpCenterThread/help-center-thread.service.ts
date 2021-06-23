import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { HelpCenterThread } from 'src/app/models/helpCenterThread/help-center-thread';

@Injectable({
  providedIn: 'root'
})
export class HelpCenterThreadService extends ApiService {
  private listHelpCenterThreads: Array<HelpCenterThread> = new Array<HelpCenterThread>();
  private userThread: HelpCenterThread = new HelpCenterThread();

  constructor(http: HttpClient) {
    super(http);
   }

  public setThreadsOfUser(data: any): void {
    this.listHelpCenterThreads = data;
  }

  public GetThreadsOfUser(): Array<HelpCenterThread> {
    return this.listHelpCenterThreads;
  }

  public setUserThread(data: HelpCenterThread): void {
    this.userThread = data;
  }

  findAllUserThreads(callbackOnSuccess: any, callbackOnFailure: any): void {

    this.doGet('helpCenterThread/findAllUserThreads', callbackOnSuccess, callbackOnFailure);
  }

  insertThread(model: HelpCenterThread,  callbackOnSuccess: any, callbackOnFailure: any) {
    this.doPost('helpCenterThread/insertThread', model, callbackOnSuccess, callbackOnFailure);
  }


}
