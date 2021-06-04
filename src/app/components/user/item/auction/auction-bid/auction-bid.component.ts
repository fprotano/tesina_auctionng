import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction/auction';
import { AuctionService } from 'src/app/services/auction/auction.service';
import { AuctionBidService } from 'src/app/services/auctionBid/auction-bid.service';
import { AuctionBid } from 'src/app/models/auctionBid/auction-bid';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-auction-bid',
  templateUrl: './auction-bid.component.html',
  styleUrls: ['./auction-bid.component.css']
})
export class AuctionBidComponent implements OnInit {

  auction: Auction = new Auction();
  auctionBid: AuctionBid = new AuctionBid();


  constructor(private auctionService: AuctionService, private auctionBidService: AuctionBidService, private userService: UserService) { }

  ngOnInit() {

    this.auction = this.auctionService.getAuction();
  }

  insertAuctionBid(): void {

    console.log('nel insertAuctionBid, AuctionBid   >'  + JSON.stringify(this.auctionBid));
    this.auctionBid.auctionId = this.auction.id;
    this.auctionBid.userId = this.userService.getLoggedUser().id;
    this.auctionBidService.insertAuction(this.auctionBid, this.callbackOnInsertSuccess.bind(this), this.callbackOnInsertFailure.bind(this));
  }

  callbackOnInsertSuccess(data: any): void {

    console.log('nel callbackOnInsertSuccess del insert Bid > ' + JSON.stringify(data));
  }

  callbackOnInsertFailure(data: any): any {
    console.log(data);
  }
}
