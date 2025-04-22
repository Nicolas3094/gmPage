import { TestBed } from '@angular/core/testing';

import { IndexElementsService } from './index-elements.service';

describe('IndexElementsService', () => {
  let service: IndexElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
