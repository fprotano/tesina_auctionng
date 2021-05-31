import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction/auction';
import { AuctionService } from 'src/app/services/auction/auction.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  auctions: Array<Auction> = new Array<Auction>();

  constructor(private auctionService: AuctionService) { }

  ngOnInit() {
  }


}
