import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmEqualValidatorDirective } from './components/user/confirm-equal-validator.directive';
import { AuctionComponent } from './components/user/item/auction/auction.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    UserComponent,
    AuctionComponent,
    ConfirmEqualValidatorDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
