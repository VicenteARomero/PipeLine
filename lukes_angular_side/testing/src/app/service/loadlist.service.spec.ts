import { TestBed } from '@angular/core/testing';

import { LoadlistService } from './loadlist.service';

describe('LoadlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadlistService = TestBed.get(LoadlistService);
    expect(service).toBeTruthy();
  });
});
