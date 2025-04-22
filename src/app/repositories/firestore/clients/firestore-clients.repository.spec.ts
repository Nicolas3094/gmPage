import { TestBed } from '@angular/core/testing';
import { FirestoreClientsRepository } from './firestore-clients.repository';


describe('ClientsService', () => {
  let service: FirestoreClientsRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreClientsRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
