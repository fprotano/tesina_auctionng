import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api/api.service';
import { AuctionBid } from 'src/app/models/auctionBid/auction-bid';

@Injectable({
  providedIn: 'root'
})
export class AuctionBidService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  insertAuction(model: AuctionBid,  callbackOnSuccess: any, callbackOnFailure: any) {
    this.doPost('auctionBid/insertBid', model, callbackOnSuccess, callbackOnFailure)
  }
}
