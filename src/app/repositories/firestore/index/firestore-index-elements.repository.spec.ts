import { TestBed } from '@angular/core/testing';

import { FirestoreIndexElementsRepository } from './firestore-index-elements.repository';

describe('IndexElementsService', () => {
  let service: FirestoreIndexElementsRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreIndexElementsRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
