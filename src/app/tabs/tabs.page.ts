import { Component } from '@angular/core';
<<<<<<< HEAD
=======
// IonIcon 
import { IonIcon } from '@ionic/angular';
// addIcons 
import { addIcons } from 'ionicons';
>>>>>>> 54b23ecb75af3ee1f22092c8866d0a026803d01d

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
<<<<<<< HEAD
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}
=======
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
>>>>>>> 54b23ecb75af3ee1f22092c8866d0a026803d01d

}
