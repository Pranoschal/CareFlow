import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { transferGuard } from './transfer.guard';

describe('transferGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => transferGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
