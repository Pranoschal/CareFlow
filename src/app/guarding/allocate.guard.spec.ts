import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { allocateGuard } from './allocate.guard';

describe('allocateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => allocateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
