import { TestBed } from '@angular/core/testing';

import { AuctionBidService } from './auction-bid.service';

describe('AuctionBidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuctionBidService = TestBed.get(AuctionBidService);
    expect(service).toBeTruthy();
  });
});
