import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctinOrderComponent } from './auctin-order.component';

describe('AuctinOrderComponent', () => {
  let component: AuctinOrderComponent;
  let fixture: ComponentFixture<AuctinOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctinOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctinOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
