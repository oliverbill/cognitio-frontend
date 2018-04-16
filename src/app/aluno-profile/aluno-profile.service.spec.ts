import { TestBed, inject } from '@angular/core/testing';

import { AlunoProfileService } from './aluno-profile.service';

describe('AlunoProfileServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunoProfileService]
    });
  });

  it('should be created', inject([AlunoProfileService], (service: AlunoProfileService) => {
    expect(service).toBeTruthy();
  }));
});
