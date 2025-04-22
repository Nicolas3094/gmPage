import { TestBed } from '@angular/core/testing';

import { FirestoreLinkInfoRepository } from './firestore-link-info.repositoy';

describe('LinkInfoService', () => {
  let service: FirestoreLinkInfoRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreLinkInfoRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
