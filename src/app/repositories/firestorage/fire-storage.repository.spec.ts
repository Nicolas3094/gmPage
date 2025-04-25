import { TestBed } from '@angular/core/testing';
import { FireStorageRepository } from './fire-storage.repository';


describe('FireStorageService', () => {
  let service: FireStorageRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireStorageRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
