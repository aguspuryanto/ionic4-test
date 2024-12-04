import { Component } from '@angular/core';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({
      'aws': 'assets/images/aws_000.png',
      'statistics': 'assets/images/statistics.png',
      'info': 'assets/images/info.png'
    });
  }
}
