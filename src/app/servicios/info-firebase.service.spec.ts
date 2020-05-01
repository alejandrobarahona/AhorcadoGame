import { TestBed } from '@angular/core/testing';

import { InfoFirebaseService } from './info-firebase.service';

describe('InfoFirebaseService', () => {
  let service: InfoFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
