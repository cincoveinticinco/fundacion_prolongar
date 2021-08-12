import { TestBed } from '@angular/core/testing';

import { OpenModuleMenuService } from './open-module-menu.service';

describe('OpenModuleMenuService', () => {
  let service: OpenModuleMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenModuleMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
