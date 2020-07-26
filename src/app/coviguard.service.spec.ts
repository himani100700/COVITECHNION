import { TestBed } from '@angular/core/testing';

import { CoviguardService } from './coviguard.service';

describe('CoviguardService', () => {
  let service: CoviguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoviguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
