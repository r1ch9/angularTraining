import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';

// Interface
import { CityDatum } from 'src/app/interfaces/cities.interface';

// Interfaces
import { CityWeather } from 'src/app/interfaces/cityWeather.interface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class WeatherCardComponent implements OnInit{
  private _appId: string = '106df6a337f9bbed1366c7b066126b0b';
  private _weatherService = 'https://api.openweathermap.org/data/2.5';
  public currentWeather: string = '';
  public temperature: number = 0;

  @Input('city') city: CityDatum = {
    name: '',
    lat: 0,
    lon: 0,
    country: '',
    state: '',
  };

  ngOnInit() {
    if(this.city.lat !== 0){
      const params = new HttpParams()
      .set('lat', this.city.lat)
      .set('lon', this.city.lon)
      .set('appid', this._appId);

    this.http.get<CityWeather>(`${this._weatherService}/weather`, {params})
      .subscribe((resp: any) => {
        this.temperature = resp.main.temp;
        if(resp.weather[0].main === 'Drizzle') {
          this.currentWeather = 'Rain';
        } else {
          this.currentWeather = resp.weather[0].main;
        }
      })
    }
  }

  removeLocation(city: CityDatum) {
    this.weatherService.removeLication(city)
  }

  weatherPic() {

    switch (this.currentWeather) {
      case 'Clear':
        return 'weather_pic clear'
        break;
    
      case 'Rain' || 'Drizzle':
        return 'weather_pic rain'
        break;

      case 'Thunderstorm':
        return 'weather_pic thunderstorm'
        break;
      
      case 'Clouds':
        return 'weather_pic clouds'
        break;
      
      case 'Haze':
        return 'weather_pic haze'
        break;

      default:
        return 'weather_pic_t clear'
        break;
    }
  }

  constructor(private http: HttpClient, private weatherService: WeatherService) {}
}
