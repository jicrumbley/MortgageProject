import { TestBed } from '@angular/core/testing';

import { LoanAPIImplService } from './loan-apiimpl.service';

describe('LoanAPIImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanAPIImplService = TestBed.get(LoanAPIImplService);
    expect(service).toBeTruthy();
  });
});
