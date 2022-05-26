import { TestBed } from '@angular/core/testing';

import { ControleLoginService } from './controle-login.service';

describe('ControleLoginService', () => {
  let service: ControleLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
