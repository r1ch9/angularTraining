import { Injectable } from '@angular/core';
import { LocationServiceService } from './location.service';
import { HttpClient, HttpParams } from '@angular/common/http';

// Interface
import { CityDatum } from '../interfaces/cities.interface';
import { CityWeather } from '../interfaces/cityWeather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private _locationService: LocationServiceService, private http: HttpClient) { }

  public cityWeather: CityWeather[] = [];

  get listOfSelectedCities() {
    return [...this._locationService.selectedCitiesList];
  }

  removeLication(city: CityDatum) {
    this._locationService.removeCity(city)
  }
}
