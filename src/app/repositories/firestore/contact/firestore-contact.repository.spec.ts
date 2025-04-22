import { TestBed } from '@angular/core/testing';
import { FirestoreContactRepository } from './firestore-contact.repository';


describe('ContactService', () => {
  let service: FirestoreContactRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreContactRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
