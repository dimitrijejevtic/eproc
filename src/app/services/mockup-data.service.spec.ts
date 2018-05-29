import { TestBed, inject } from '@angular/core/testing';

import { MockupDataService } from './mockup-data.service';

describe('MockupDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockupDataService]
    });
  });

  it('should be created', inject([MockupDataService], (service: MockupDataService) => {
    expect(service).toBeTruthy();
  }));
});
