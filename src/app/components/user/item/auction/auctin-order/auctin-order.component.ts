import { Component, OnInit } from '@angular/core';
import { AuctionOrderService } from 'src/app/services/auctionOrder/auction-order.service';
import { UserService } from 'src/app/services/user/user.service';
import { AuctionOrder } from 'src/app/models/auctionOrder/auction-order';
import { User } from 'src/app/models/user/user';
import { Payment } from 'src/app/models/payment/payment';

@Component({
  selector: 'app-auctin-order',
  templateUrl: './auctin-order.component.html',
  styleUrls: ['./auctin-order.component.css']
})
export class AuctinOrderComponent implements OnInit {

  auctionOrder: AuctionOrder = new AuctionOrder();
  auctionOrderList: Array<AuctionOrder> = new Array<AuctionOrder>();
  loggedUser: User = new User();
  payment: Payment = new Payment();


  constructor(private userService: UserService, private auctionOrderService: AuctionOrderService) { }

  ngOnInit() {

    this.loggedUser = this.userService.getLoggedUser();
    this.auctionOrderService.findAuctionOrderByUserId(this.loggedUser, this.callbackOnSuccess.bind(this), this.callbackOnFailure.bind(this))

  }

  makePayment(auctionOrder: AuctionOrder) {

    this.payment.amount = auctionOrder.amount;
    this.payment.customCode = auctionOrder.orderNo;
    this.payment.email = auctionOrder.auction.userItem.user.email;
    console.log('nel make payment, payment > ' + JSON.stringify(this.payment))
    this.auctionOrderService.makePayment(this.payment, this.callbackPaymnetOnSuccess.bind(this), this.callbackPaymnetOnFailure.bind(this))

  }

  callbackOnSuccess(data: any): void {

    console.log('nel callbackOnSuccess del findInvoiceByUser > ' + JSON.stringify(data));
    this.auctionOrderList = data;
  }

  callbackOnFailure(data: any): any {
    console.log(data);
  }

  callbackPaymnetOnSuccess(data: any): void {

    console.log('nel callbackPaymnetOnSuccess del makePayment > ' + JSON.stringify(data));
  }

  callbackPaymnetOnFailure(data: any): any {
    console.log(data);
  }

}
