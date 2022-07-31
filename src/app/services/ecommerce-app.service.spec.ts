import { TestBed } from '@angular/core/testing';

import { EcommerceAppService } from './ecommerce-app.service';

describe('EcommerceAppService', () => {
  let service: EcommerceAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
