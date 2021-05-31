import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction/auction';
import { AuctionService } from 'src/app/services/auction/auction.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  dbAuction: Array<Auction> = new Array<Auction>();
  auction: Auction = new Auction();

  constructor(private auctionService: AuctionService) { }

  ngOnInit() {

    this.auctionService.findAllAuctions(this.callbackOnSuccess.bind(this), this.callbackOnFailure.bind(this));
  }

  callbackOnSuccess(data: any): void {

    console.log('nel callbackOnSuccess del findAllAuctions > ' + JSON.stringify(data));
    // qui faccio un po un giro ridondante, la il service comportandosi come un singleton
    // mi garantisce la lista di libri sempre disponibile
    this.auctionService.setDb(data);
    this.dbAuction = this.auctionService.getDb();
    console.log('nel callbackOnSuccess del findAllAuctions dopo il getDB> ' + JSON.stringify(this.dbAuction));
  }

  callbackOnFailure(data: any): any {
    console.log(data);
  }


}
