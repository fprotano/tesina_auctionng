import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionOrderComponent } from './auction-order.component';

describe('AuctionOrderComponent', () => {
  let component: AuctionOrderComponent;
  let fixture: ComponentFixture<AuctionOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
