import { TestBed, inject } from '@angular/core/testing';

import { SvpService } from './svp.service';

describe('SvpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvpService]
    });
  });

  it('should be created', inject([SvpService], (service: SvpService) => {
    expect(service).toBeTruthy();
  }));
});
