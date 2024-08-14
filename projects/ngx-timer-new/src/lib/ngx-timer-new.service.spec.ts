import { TestBed } from '@angular/core/testing';

import { NgxTimerNewService } from './ngx-timer-new.service';

describe('NgxTimerNewService', () => {
  let service: NgxTimerNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTimerNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
