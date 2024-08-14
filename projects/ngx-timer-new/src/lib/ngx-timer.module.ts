import { NgModule } from '@angular/core';
import { CountupTimerComponent } from './countup-timer/countup-timer.component';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountupTimerService } from './countup-timer/countup-timer.service';
import { CountdownTimerService } from './countdown-timer/countdown-timer.service';

@NgModule({
  declarations: [
    CountupTimerComponent, 
    CountdownTimerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CountupTimerComponent,
    CountdownTimerComponent
  ],
  providers:[
    CountupTimerService,
    CountdownTimerService
  ]
})
export class NgxTimerModule { }
