import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { Auction } from 'src/app/models/auction/auction';

@Injectable({
  providedIn: 'root'
})
export class AuctionService extends ApiService {

  private auctionList: Array<Auction> = new Array<Auction>();

  constructor(http: HttpClient) {
    super(http);
  }

  public setDb(data: any): void {

    this.auctionList = data;
  }

  public getDb(): Array<Auction> {

    return this.auctionList;
  }

  findAllAuctions(callbackOnSuccess: any, callbackOnFailure: any): void {

    this.doGet('auction/findAllAuctions', callbackOnSuccess, callbackOnFailure);
  }
}
