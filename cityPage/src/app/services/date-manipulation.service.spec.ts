import { TestBed } from '@angular/core/testing';

import { DateManipulationService } from './date-manipulation.service';

describe('DateManipulationService', () => {
  let service: DateManipulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateManipulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
