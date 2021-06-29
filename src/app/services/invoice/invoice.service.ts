import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api/api.service';
import { User } from 'src/app/models/user/user';
import { AuctionOrder } from 'src/app/models/auctionOrder/auction-order';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends ApiService {

  constructor(http: HttpClient) {
    super(http);

  }

  findInvoiceByUserId(model: User,  callbackOnSuccess: any, callbackOnFailure: any) {
    this.doPost('invoice/invoiceFindByUserId', model, callbackOnSuccess, callbackOnFailure)
  }

  downloadInvoice(model: AuctionOrder,  callbackOnSuccess: any, callbackOnFailure: any) {
    this.doPost('invoice/downloadInvoice', model, callbackOnSuccess, callbackOnFailure);
  }
}
