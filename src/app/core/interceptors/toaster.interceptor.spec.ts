import { TestBed } from '@angular/core/testing';

import { ToasterInterceptor } from './toaster.interceptor';

describe('ToasterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ToasterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ToasterInterceptor = TestBed.inject(ToasterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
