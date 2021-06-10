import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { UserService } from 'src/app/services/user/user.service';
import { Invoice } from 'src/app/models/invoice/invoice';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice: Invoice = new Invoice();
  invoiceList: Array<Invoice> = new Array<Invoice>();
  loggedUser: User = new User();

  constructor(private userService: UserService, private invoiceService: InvoiceService ) { }

  ngOnInit() {

    this.loggedUser = this.userService.getLoggedUser();
    this.invoiceService.findInvoiceByUserId(this.loggedUser, this.callbackOnSuccess.bind(this), this.callbackOnFailure.bind(this))

  }

  callbackOnSuccess(data: any): void {

    console.log('nel callbackOnSuccess del findInvoiceByUser > ' + JSON.stringify(data));
    this.invoiceList = data;
  }

  callbackOnFailure(data: any): any {
    console.log(data);
  }
}
