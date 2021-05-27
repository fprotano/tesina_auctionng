import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakeComponent } from './components/fake/fake.component';
import { FakeInsertComponent } from './components/fake-insert/fake-insert.component';
import { FakeLoginComponent } from './components/fake-login/fake-login.component';
import { FakeLogoutComponent } from './components/fake-logout/fake-logout.component';


const routes: Routes = [

  {path:"fake",component:FakeComponent}
  ,{path:"fake-insert",component:FakeInsertComponent}
   ,{path:"fake-login",component:FakeLoginComponent}
   ,{path:"fake-logout",component:FakeLogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
