import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction/auction';
import { AuctionService } from 'src/app/services/auction/auction.service';
import { AuctionDto } from 'src/app/models/auctioDto/auction-dto';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  dbAuction: Array<Auction> = new Array<Auction>();
  auction: Auction = new Auction();
  newAuction: Auction = new Auction();
  auctionDayDuration: number;
  auctionDto: AuctionDto = new AuctionDto();
  insertAuctionButton: boolean = false;
  insertBidButton: boolean = false;


  constructor(private auctionService: AuctionService) { }

  ngOnInit() {

    this.auctionService.findAllAuctions(this.callbackOnSuccess.bind(this), this.callbackOnFailure.bind(this));
  }

  insertAuctionForm(): void {
    if (!this.insertAuctionButton) {
      this.insertAuctionButton = true;
    } else {
        this.insertAuctionButton = false;
      }
  }

  insertBidForm(): void {
    if (!this.insertBidButton) {
      this.insertBidButton = true;
    } else {
        this.insertBidButton = false;
      }
  }

  insertAuction(): void {

    console.log('nel insertAuction >' + '[ ' + this.auctionDayDuration + ' ' + JSON.stringify(this.newAuction) + ' ]');
    this.auctionDto.auctionDayDuration = this.auctionDayDuration;
    console.log(this.auctionDto.auctionDayDuration);
    this.auctionDto.auction = this.newAuction;

    this.auctionService.insertAuction(this.auctionDto, this.callbackOnInsertSuccess.bind(this), this.callbackOnInsertFailure.bind(this));
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

  callbackOnInsertSuccess(data: any): void {

    console.log('nel callbackOnInsertSuccess del insert Auction > ' + JSON.stringify(data));

  }

  callbackOnInsertFailure(data: any): any {
    console.log(data);
  }


}
