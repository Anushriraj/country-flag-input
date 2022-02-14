import { TestBed } from '@angular/core/testing';

import { SfwFlagInputComponentService } from './sfw-country-flag-input.service';

describe('SfwFlagInputComponentService', () => {
  let service: SfwFlagInputComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfwFlagInputComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
