import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

// Componentes
import { LocationComponent } from '../../pages/location/location.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { HomeCardComponent } from './home-card/home-card.component';

// Servicios
import { LocationServiceService } from '../../services/location.service';

//NgRx
import { Store } from '@ngrx/store';

// Interfaces
import { CityDatum, locationStore } from 'src/app/interfaces/cities.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, LocationComponent, NavbarComponent, CommonModule, HomeCardComponent],
})
export class HomePage {
  constructor(private LocationServiceService: LocationServiceService, private store: Store<locationStore>) {
    this.store.select('location')
      .subscribe((location) => {
        this.cityList = location.selectedCities;
      })
  }

  public cityList: CityDatum[] = [];

  // Change the logic to use the store.
  // get cityList() {
  //   return this.LocationServiceService.selectedCitiesList
  // }

  public mouseOver: boolean = false;
  @Input('city') city:any = {};

  removeLocation(city: any) {
    this.LocationServiceService.removeCity(city)
  }
}
