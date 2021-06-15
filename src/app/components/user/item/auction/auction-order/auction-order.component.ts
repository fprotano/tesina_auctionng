import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuctionOrderService } from 'src/app/services/auctionOrder/auction-order.service';
import { UserService } from 'src/app/services/user/user.service';
import { AuctionOrder } from 'src/app/models/auctionOrder/auction-order';
import { User } from 'src/app/models/user/user';
import { Payment } from 'src/app/models/payment/payment';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-auction-order',
  templateUrl: './auction-order.component.html',
  styleUrls: ['./auction-order.component.css']
})
export class AuctionOrderComponent implements OnInit {

  auctionOrder: AuctionOrder = new AuctionOrder();
  auctionOrderList: Array<AuctionOrder> = new Array<AuctionOrder>();
  loggedUser: User = new User();
  payment: Payment = new Payment();

  @ViewChild('paymentForm', {static: false}) myform: ElementRef<HTMLFormElement>;
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
    this.payment = data;

    // var myform = document.getElementById('payment');

    this.myform.nativeElement.action = this.payment.urlBank;
    this.myform.nativeElement.email.value = this.payment.email;
    this.myform.nativeElement.amount.value = this.payment.amount;
    this.myform.nativeElement.customCode.value = this.payment.customCode;
    this.myform.nativeElement.urlSuccess.value = this.payment.urlSuccess;
    this.myform.nativeElement.urlUnDo.value = this.payment.urlUnDo;
    this.myform.nativeElement.urlNotify.value = this.payment.urlNotify;

    this.myform.nativeElement.submit();
  }

  callbackPaymnetOnFailure(data: any): any {
    console.log(data);
  }

}