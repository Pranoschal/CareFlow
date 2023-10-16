import { TestBed } from '@angular/core/testing';

import { DataUseService } from './data-use.service';

describe('DataUseService', () => {
  let service: DataUseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataUseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
