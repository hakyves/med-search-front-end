import { TestBed } from '@angular/core/testing';

import { MedicalshopService } from './medicalshop.service';

describe('MedicalshopService', () => {
  let service: MedicalshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
