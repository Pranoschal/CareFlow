import { TestBed } from '@angular/core/testing';

import { LoginRegisterService } from './login-register.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginRegisterService', () => {
  let service: LoginRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LoginRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
