import { TestBed, inject } from '@angular/core/testing';

import { VdocypherService } from './vdocypher.service';

describe('VdocypherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VdocypherService]
    });
  });

  it('should be created', inject([VdocypherService], (service: VdocypherService) => {
    expect(service).toBeTruthy();
  }));
});
