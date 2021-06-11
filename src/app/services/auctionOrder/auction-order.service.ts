import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuctionOrderService extends ApiService{

  constructor(http: HttpClient) {
    super(http);

  }

  findInvoiceByUserId(model: User,  callbackOnSuccess: any, callbackOnFailure: any) {
    this.doPost('invoice/AuctionOrderFindByUserId', model, callbackOnSuccess, callbackOnFailure)
  }
}
