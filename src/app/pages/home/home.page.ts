import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { LocationComponent } from '../../pages/location/location.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { LocationServiceService } from '../../services/location.service';
import { CommonModule } from '@angular/common';
import { HomeCardComponent } from './home-card/home-card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, LocationComponent, NavbarComponent, CommonModule, HomeCardComponent],
})
export class HomePage {
  constructor(private LocationServiceService: LocationServiceService) {}

  get cityList() {
    return this.LocationServiceService.selectedCitiesList
  }
}
