import { Component, ViewChild } from '@angular/core';
import { IonModal, IonicModule } from '@ionic/angular';

import { OverlayEventDetail } from '@ionic/core/components';

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
