import { TestBed } from '@angular/core/testing';

import { HelpCenterService } from './help-center.service';

describe('HelpCenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelpCenterService = TestBed.get(HelpCenterService);
    expect(service).toBeTruthy();
  });
});
