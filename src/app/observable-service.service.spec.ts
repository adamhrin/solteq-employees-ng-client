import { TestBed } from '@angular/core/testing';

import { ObservableService } from './observable-service.service';

describe('ObservableServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservableService = TestBed.get(ObservableService);
    expect(service).toBeTruthy();
  });
});
