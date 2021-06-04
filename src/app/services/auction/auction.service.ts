import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { Auction } from 'src/app/models/auction/auction';
import { AuctionDto } from 'src/app/models/auctioDto/auction-dto';

@Injectable({
  providedIn: 'root'
})
export class AuctionService extends ApiService {

  private auctionList: Array<Auction> = new Array<Auction>();
  private auction: Auction = new Auction();

  constructor(http: HttpClient) {
    super(http);
  }

  public setDb(data: any): void {

    this.auctionList = data;
  }

  public getDb(): Array<Auction> {

    return this.auctionList;
  }
  public setAuction(data: Auction): void {

    this.auction = data;
  }

  public getAuction(): Auction {

    return this.auction;
  }

  findAllAuctions(callbackOnSuccess: any, callbackOnFailure: any): void {

    this.doGet('auction/findAllAuctions', callbackOnSuccess, callbackOnFailure);
  }

  insertAuction(model: AuctionDto,  callbackOnSuccess: any, callbackOnFailure: any) {
    this.doPost('auction/auctionInsert', model, callbackOnSuccess, callbackOnFailure)
  }
}
