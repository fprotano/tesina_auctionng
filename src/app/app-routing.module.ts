import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AuctionComponent } from './components/user/item/auction/auction.component';
import { ItemComponent } from './components/user/item/item.component';
import { AuctionBidComponent } from './components/user/item/auction/auction-bid/auction-bid.component';
import { AuctionOrderComponent } from './components/user/item/auction/auction-order/auction-order.component';
import { HelpCenterComponent } from './components/user/help-center/help-center.component';
import { HelpCenterThreadComponent } from './components/user/help-center/help-center-thread/help-center-thread.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }
  , { path: 'user', component: UserComponent }
  , { path: 'auction', component: AuctionComponent }
  , { path: 'item', component: ItemComponent }
  , { path: 'auctionBid', component: AuctionBidComponent }
  , { path: 'auctionOrder', component: AuctionOrderComponent }
  , { path: 'auctionOrder/:result', component: AuctionOrderComponent }
  , { path: 'helpCenter', component: HelpCenterComponent }
  , { path: 'helpCenterThreads', component: HelpCenterThreadComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
