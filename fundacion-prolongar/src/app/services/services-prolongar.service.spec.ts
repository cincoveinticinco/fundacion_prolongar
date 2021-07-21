import { TestBed } from '@angular/core/testing';

import { ServicesProlongarService } from './services-prolongar.service';

describe('ServicesProlongarService', () => {
  let service: ServicesProlongarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesProlongarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
