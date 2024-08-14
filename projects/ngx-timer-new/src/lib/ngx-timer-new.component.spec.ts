import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTimerNewComponent } from './ngx-timer-new.component';

describe('NgxTimerNewComponent', () => {
  let component: NgxTimerNewComponent;
  let fixture: ComponentFixture<NgxTimerNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTimerNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxTimerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
