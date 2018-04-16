import { TestBed, inject } from '@angular/core/testing';

import { VideoAulaService } from './video-aula.service';

describe('VideoAulaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoAulaService]
    });
  });

  it('should be created', inject([VideoAulaService], (service: VideoAulaService) => {
    expect(service).toBeTruthy();
  }));
});
