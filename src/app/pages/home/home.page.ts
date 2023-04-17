import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { LocationComponent } from '../../pages/location/location.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, LocationComponent, NavbarComponent],
})
export class HomePage {
  constructor() {}
}
