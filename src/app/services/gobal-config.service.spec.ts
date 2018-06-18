import { TestBed, inject } from '@angular/core/testing';

import { GobalConfigService } from './gobal-config.service';

describe('GobalConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GobalConfigService]
    });
  });

  it('should be created', inject([GobalConfigService], (service: GobalConfigService) => {
    expect(service).toBeTruthy();
  }));
});
