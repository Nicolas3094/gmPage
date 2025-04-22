import { TestBed } from '@angular/core/testing';

import { FirestoreNosotrosRepository } from './firestore-nosotros.repository';

describe('NosotrosService', () => {
  let service: FirestoreNosotrosRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreNosotrosRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
