import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeComponent } from './components/fake/fake.component';
import { FakeInsertComponent } from './components/fake-insert/fake-insert.component';
import { NavComponent } from './components/nav/nav.component';
import { FakeLoginComponent } from './components/fake-login/fake-login.component';
import { FakeLogoutComponent } from './components/fake-logout/fake-logout.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';


import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FakeComponent,
    FakeInsertComponent,
    NavComponent,
    FakeLoginComponent,
    FakeLogoutComponent,
    HomeComponent,
    UserComponent

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
