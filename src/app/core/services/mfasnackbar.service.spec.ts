import { TestBed } from '@angular/core/testing';

import { MfasnackbarService } from './mfasnackbar.service';

describe('MfasnackbarService', () => {
  let service: MfasnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfasnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
