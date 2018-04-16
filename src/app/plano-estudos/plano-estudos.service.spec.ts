import { TestBed, inject } from '@angular/core/testing';

import { PlanoEstudosService } from './plano-estudos.service';

describe('PlanoEstudosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanoEstudosService]
    });
  });

  it('should be created', inject([PlanoEstudosService], (service: PlanoEstudosService) => {
    expect(service).toBeTruthy();
  }));
});
