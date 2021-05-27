import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  public onLoginStatusChanged : EventEmitter<boolean> = new EventEmitter();

  constructor() { }
}
