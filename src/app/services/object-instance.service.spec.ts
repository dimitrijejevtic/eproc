import { TestBed, inject } from '@angular/core/testing';

import { ObjectInstanceService } from './object-instance.service';

describe('ObjectInstanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectInstanceService]
    });
  });

  it('should be created', inject([ObjectInstanceService], (service: ObjectInstanceService) => {
    expect(service).toBeTruthy();
  }));
});
