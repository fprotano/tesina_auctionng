import { Component, OnInit } from '@angular/core';
import { AuctionOrderService } from 'src/app/services/auctionOrder/auction-order.service';
import { UserService } from 'src/app/services/user/user.service';
import { AuctionOrder } from 'src/app/models/auctionOrder/auction-order';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-auctin-order',
  templateUrl: './auctin-order.component.html',
  styleUrls: ['./auctin-order.component.css']
})
export class AuctinOrderComponent implements OnInit {

  auctionOrder: AuctionOrder = new AuctionOrder();
  auctionOrderList: Array<AuctionOrder> = new Array<AuctionOrder>();
  loggedUser: User = new User();

  constructor(private userService: UserService, private auctionOrderService: AuctionOrderService) { }

  ngOnInit() {

    this.loggedUser = this.userService.getLoggedUser();
    this.auctionOrderService.findAuctionOrderByUserId(this.loggedUser, this.callbackOnSuccess.bind(this), this.callbackOnFailure.bind(this))

  }

  callbackOnSuccess(data: any): void {

    console.log('nel callbackOnSuccess del findInvoiceByUser > ' + JSON.stringify(data));
    this.auctionOrderList = data;
  }

  callbackOnFailure(data: any): any {
    console.log(data);
  }

}
