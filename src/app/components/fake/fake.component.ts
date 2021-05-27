import { Component, OnInit } from '@angular/core';
import { Fake } from 'src/app/models/fake';
import { FakeService } from 'src/app/services/fake.service';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {

  model : Fake= null;
  err:String=null;
  err_code:String=null;
  constructor(private fakeService : FakeService) {

   }

  ngOnInit() {
     this.fakeService.find(this.onLoadSuccess.bind(this),this.onLoadFailure.bind(this));
  }

  onLoadSuccess(data:any) {
   this.model = data;

  }
  onLoadFailure(err:string,err_code:string) {
    this.err=err;
    this.err_code=err_code;
  }
    
}
