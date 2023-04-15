import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';


import { LocationComponent } from '../location/location.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, LocationComponent],
})
export class HomePage {
  constructor() {}
}
