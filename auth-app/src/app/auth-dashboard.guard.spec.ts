import { TestBed } from '@angular/core/testing';

import { AuthDashboardGuard } from './auth-dashboard.guard';

describe('AuthDashboardGuard', () => {
  let guard: AuthDashboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthDashboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
