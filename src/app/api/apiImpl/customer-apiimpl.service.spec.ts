import { TestBed } from '@angular/core/testing';

import { CustomerAPIImplService } from './customer-apiimpl.service';

describe('CustomerAPIImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerAPIImplService = TestBed.get(CustomerAPIImplService);
    expect(service).toBeTruthy();
  });
});
