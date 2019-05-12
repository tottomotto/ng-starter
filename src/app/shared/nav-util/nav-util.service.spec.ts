import { TestBed } from '@angular/core/testing';

import { NavUtilService } from './nav-util.service';

describe('NavUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavUtilService = TestBed.get(NavUtilService);
    expect(service).toBeTruthy();
  });
});
