import { TestBed } from '@angular/core/testing';

import { UntilsService } from './untils.service';

describe('UntilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UntilsService = TestBed.inject(UntilsService);
    expect(service).toBeTruthy();
  });
});
