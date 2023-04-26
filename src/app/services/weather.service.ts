import { Injectable } from '@angular/core';
import { LocationServiceService } from './location.service';

// NgRx
import { Store } from '@ngrx/store';

// Interface
import { CityDatum, locationStore } from '../interfaces/cities.interface';
import { CityWeather } from '../interfaces/cityWeather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public cityWeather: CityWeather[] = [];
  public listOfSelectedCities: CityDatum[] = [];
  
  // Change the logic to use the store.
  // get listOfSelectedCities() {
  //   return [...this._locationService.selectedCitiesList];
  // }
    
  removeLication(city: CityDatum) {
    this._locationService.removeCity(city)
  }

  constructor(private _locationService: LocationServiceService, private store: Store<locationStore>) {
    this.store.select('location')
      .subscribe((location) => {
        this.listOfSelectedCities = [...location.selectedCities];
      })
  }
}
