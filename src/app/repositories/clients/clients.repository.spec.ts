import { TestBed } from '@angular/core/testing';
import { ClientsRepository } from './clients.repository';


describe('ClientsService', () => {
  let service: ClientsRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
