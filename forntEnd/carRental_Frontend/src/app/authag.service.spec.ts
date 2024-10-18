import { TestBed } from '@angular/core/testing';

import { AuthagService } from './authag.service';

describe('AuthagService', () => {
  let service: AuthagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
