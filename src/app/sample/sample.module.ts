import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { NgxTimerModule } from '../../../projects/ngx-timer-new/src/public-api';
import { SampleCountupTimerComponent } from './sample-countup-timer/sample-countup-timer.component';
import { SampleCountdownTimerComponent } from './sample-countdown-timer/sample-countdown-timer.component';

@NgModule({
  declarations: [SampleComponent, SampleCountupTimerComponent, SampleCountdownTimerComponent],
  imports: [
    CommonModule,
    NgxTimerModule
  ],
  exports: [
    SampleComponent
  ],
})
export class SampleModule { }
