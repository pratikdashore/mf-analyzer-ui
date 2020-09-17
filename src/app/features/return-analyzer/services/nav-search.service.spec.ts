import { TestBed } from '@angular/core/testing';

import { NavSearchService } from './nav-search.service.';

describe('NavSearchServiceService', () => {
  let service: NavSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
