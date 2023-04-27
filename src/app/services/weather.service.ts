import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// NgRx
import { Store } from '@ngrx/store';
import { addNewCityweather, setCityweather } from '../ngrx/weather/weather.actions';

// Interface
import { CityDatum, locationStore } from '../interfaces/cities.interface';
import { CityWeather, weatherCity, cityWeatherStore } from '../interfaces/cityWeather.interface';

// Service
import { LocationServiceService } from './location.service';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public cityWeather: CityWeather[] = [];
  public listOfSelectedCities: CityDatum[] = [];
  public listOfWeather: weatherCity[] = [];

  private _appId: string = '106df6a337f9bbed1366c7b066126b0b';
  private _weatherService = 'https://api.openweathermap.org/data/2.5';
    
  removeLication(city: CityDatum) {
    const items = this.listOfWeather.filter((item) => item.name !== city.name);
    this.weatherStore.dispatch(setCityweather({list: items}))
    this._locationService.removeCity(city);
  }

  req(city: CityDatum) {
    let temperature: number = 0;
    let currentWeather: string = '';

    if(this.listOfWeather.some(cities => cities.name === city.name)){
      return;
    }

    const params = new HttpParams()
      .set('lat', city.lat)
      .set('lon', city.lon)
      .set('appid', this._appId);

    this.http.get<CityWeather>(`${this._weatherService}/weather`, {params})
      .subscribe((resp: any) => {
        temperature = resp.main.temp;
        if(resp.weather[0].main === 'Drizzle') {
          currentWeather = 'Rain';
        } else if(resp.weather[0].main === 'Mist' || resp.weather[0].main === 'Fog'){
          currentWeather = 'Haze';
        } else {
          currentWeather = resp.weather[0].main;
        }

        const cityWWeather: weatherCity = {
          name:    city.name,
          lat:     city.lat,
          lon:     city.lon,
          country: city.country,
          state:   city.state,
          temperature,
          currentWeather,
        };
        
        if(!this.listOfWeather.some(city => city.name === cityWWeather.name)){ 
          this.weatherStore.dispatch(addNewCityweather({city: cityWWeather}))
         }
        
      })
    
  }

  constructor(
    private _locationService: LocationServiceService, 
    private locationStore: Store<locationStore>, 
    private http: HttpClient,
    private weatherStore: Store<cityWeatherStore>
  ) {
    this.locationStore.select('location')
    .subscribe((location) => {
      this.listOfSelectedCities = [...location.selectedCities];
    })

    this.weatherStore.subscribe((state: any) => this.listOfWeather = [...state.weather.weatherCities])
  
  }
}
