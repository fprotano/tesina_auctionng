import { Component, OnInit } from '@angular/core';
import { FakeService } from 'src/app/services/fake.service';
import { Fake } from 'src/app/models/fake';

@Component({
  selector: 'app-fake-insert',
  templateUrl: './fake-insert.component.html',
  styleUrls: ['./fake-insert.component.css']
})
export class FakeInsertComponent implements OnInit {

  model : Fake= new Fake();
  constructor(private fakeService : FakeService) { 

    
  }

  ngOnInit() {
  }

  onClick() {

    this.fakeService.insert(this.model,this.onClickSuccess.bind(this),this.onClickFailure.bind(this));

  }
  onClickSuccess(data:any) {
    alert("ok");

  }
  onClickFailure(err:string,err_code:string) {
    alert(err);

  }
    
}
