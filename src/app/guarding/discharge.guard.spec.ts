import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { dischargeGuard } from './discharge.guard';

describe('dischargeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dischargeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
