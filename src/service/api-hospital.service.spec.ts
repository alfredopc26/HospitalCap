import { TestBed } from '@angular/core/testing';

import { ApiHospitalService } from './api-hospital.service';

describe('ApiHospitalService', () => {
  let service: ApiHospitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHospitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
