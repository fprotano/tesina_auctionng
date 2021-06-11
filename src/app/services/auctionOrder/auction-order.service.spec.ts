import { TestBed } from '@angular/core/testing';

import { AuctionOrderService } from './auction-order.service';

describe('AuctionOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuctionOrderService = TestBed.get(AuctionOrderService);
    expect(service).toBeTruthy();
  });
});
