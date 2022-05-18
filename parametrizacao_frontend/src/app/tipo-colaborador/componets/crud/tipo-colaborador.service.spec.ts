import { TestBed } from '@angular/core/testing';

import { TipoColaboradorService } from './tipo-colaborador.service';

describe('TipoColaboradorService', () => {
  let service: TipoColaboradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoColaboradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
