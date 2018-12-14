import { TestBed } from '@angular/core/testing';

import { ReportAPIImplService } from './report-apiimpl.service';

describe('ReportAPIImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportAPIImplService = TestBed.get(ReportAPIImplService);
    expect(service).toBeTruthy();
  });
});
