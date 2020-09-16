import { TestBed } from '@angular/core/testing';

import { MfaHttpService } from './mfa-http.service';

describe('MfaHttpService', () => {
  let service: MfaHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfaHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
