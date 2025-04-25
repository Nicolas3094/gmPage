import { TestBed } from '@angular/core/testing';

import { VideoPlatformService } from './video-platform.service';

describe('VideoPlatformService', () => {
  let service: VideoPlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoPlatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
