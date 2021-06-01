import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AuctionComponent } from './components/user/item/auction/auction.component';
import { ItemComponent } from './components/user/item/item.component';


const routes: Routes = [


   { path: 'home', component: HomeComponent }
   , { path: 'user', component: UserComponent }
   , { path: 'auction', component: AuctionComponent }
   , { path: 'item', component: ItemComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
