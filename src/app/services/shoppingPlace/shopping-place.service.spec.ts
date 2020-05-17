import { TestBed } from '@angular/core/testing';

import { ShoppingPlaceService } from './shopping-place.service';

describe('ShoppingPlaceService', () => {
  let service: ShoppingPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
