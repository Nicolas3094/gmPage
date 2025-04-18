import { TestBed } from '@angular/core/testing';

import { ExpandElementService } from './expand-element.service';

describe('ExpandElementService', () => {
  let service: ExpandElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpandElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
