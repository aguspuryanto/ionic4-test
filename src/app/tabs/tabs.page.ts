import { Component } from '@angular/core';
// IonIcon 
import { IonIcon } from '@ionic/angular';
// addIcons 
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
  // imports: [IonIcon]
})
export class TabsPage {

  aws = './assets/images/aws_000.png';
  statistics = './assets/images/statistics.png';
  info = './assets/images/info.png';

  constructor() {
    addIcons({
      'aws': 'assets/images/aws_000.png',
      'statistics': 'assets/images/statistics.png',
      'info': 'assets/images/info.png'
    });
  }

}
