import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmEqualValidatorDirective } from './components/user/confirm-equal-validator.directive';
import { AuctionComponent } from './components/user/item/auction/auction.component';
import { ItemComponent } from './components/user/item/item.component';
import { AuctionBidComponent } from './components/user/item/auction/auction-bid/auction-bid.component';
import { InvoiceComponent } from './components/user/item/auction/invoice/invoice.component';
import { AuctinOrderComponent } from './components/user/item/auction/auctin-order/auctin-order.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    UserComponent,
    AuctionComponent,
    ConfirmEqualValidatorDirective,
    ItemComponent,
    AuctionBidComponent,
    InvoiceComponent,
    AuctinOrderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
