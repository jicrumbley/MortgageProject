import { TestBed } from '@angular/core/testing';

import { EmployeeAPIImplService } from './employee-apiimpl.service';

describe('EmployeeAPIImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeAPIImplService = TestBed.get(EmployeeAPIImplService);
    expect(service).toBeTruthy();
  });
});
