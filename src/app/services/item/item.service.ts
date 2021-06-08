import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { UserItem } from 'src/app/models/userItem/userItem';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService extends ApiService {

  public userItemList: Array<UserItem> = new Array<UserItem>();

  constructor(http: HttpClient) {
    super(http);
  }

  public setDb(data: any): void {
    this.userItemList = data;
  }
  public getDb(): Array<UserItem> {
    return this.userItemList;
  }
  findUserItemByUser(idUser: number, callbackOnSuccess: any, callbackOnFailure: any): void {

    this.doPost('userItem/findUserItemByUser', idUser, callbackOnSuccess, callbackOnFailure);

  }

  insertUserItem(model: UserItem,  callbackOnSuccess: any, callbackOnFailure: any) {
    this.doPost('userItem/userItemInsert', model, callbackOnSuccess, callbackOnFailure)
  }

  // updateItem(model: UserItem, callbackOnSuccess: any, callbackOnFailure: any){
  //   this.doPost('userItem/updateItem', model, callbackOnSuccess, callbackOnFailure)
  // }


  }
