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
  private _appId: string = '106df6a337f9bbed1366c7b066126b0b';
  private _weatherService = 'https://api.openweathermap.org/data/2.5';
  public cityWeather: CityWeather[] = [];

  get listOfSelectedCities() {
    return [...this._locationService.selectedCitiesList];
  }

  get listOfWeather() {
    this._locationService.selectedCitiesList.map((city) => {
      this.cityWeather.map((cW) => {
        if(cW.name === city.name) {
          return;
        }

        this.request(city)
      })
    })

    console.log(this.cityWeather)

    return this.cityWeather
  }

  getCityWeather(cities: CityDatum[]) {
    
  }

  request(city: CityDatum) {
    const params = new HttpParams()
      .set('lat', city.lat)
      .set('lon', city.lon)
      .set('appid', this._appId);

    this.http.get<CityWeather>(`${this._weatherService}/weather`, {params})
      .subscribe((resp) => {
        this.cityWeather.push(resp)
      })
  }
}
