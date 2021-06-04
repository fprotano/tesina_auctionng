import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction/auction';
import { AuctionService } from 'src/app/services/auction/auction.service';
import { AuctionBidService } from 'src/app/services/auctionBid/auction-bid.service';

@Component({
  selector: 'app-auction-bid',
  templateUrl: './auction-bid.component.html',
  styleUrls: ['./auction-bid.component.css']
})
export class AuctionBidComponent implements OnInit {

  auction: Auction = new Auction();

  constructor(private auctionService: AuctionService, private auctionBidService: AuctionBidService) { }

  ngOnInit() {

    this.auction = this.auctionService.getAuction();
  }


}
