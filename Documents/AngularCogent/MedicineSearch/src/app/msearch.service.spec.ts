import { TestBed } from '@angular/core/testing';

import { MsearchService } from './msearch.service';

describe('MsearchService', () => {
  let service: MsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
