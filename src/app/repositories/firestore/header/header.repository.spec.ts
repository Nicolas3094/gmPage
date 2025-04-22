import { TestBed } from '@angular/core/testing';

import { FirestoreHeaderRepository } from './header.repository';

describe('HeaderService', () => {
  let service: FirestoreHeaderRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreHeaderRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
