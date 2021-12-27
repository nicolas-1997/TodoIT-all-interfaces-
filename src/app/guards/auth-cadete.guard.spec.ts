import { TestBed } from '@angular/core/testing';

import { AuthCadeteGuard } from './auth-cadete.guard';

describe('AuthCadeteGuard', () => {
  let guard: AuthCadeteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthCadeteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
