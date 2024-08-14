import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleModule } from './sample/sample.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SampleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-timer-new-lib';
}
