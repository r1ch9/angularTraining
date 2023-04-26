import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

// Interface
import { CityDatum } from 'src/app/interfaces/cities.interface';

// Service
import { WeatherService } from 'src/app/services/weather.service';
import { weatherCity } from 'src/app/interfaces/cityWeather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class WeatherCardComponent implements OnInit {

  @Input('city') city: weatherCity = {
    name: '',
    lat: 0,
    lon: 0,
    country: '',
    state: '',
    temperature: 0,
    currentWeather: ''
  };

  removeLocation(city: CityDatum) {
    this.weatherService.removeLication(city)
  }

  ngOnInit() {
    this.weatherService.req(this.city)
  }

  weatherPic() {

    switch (this.city.currentWeather) {
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

  constructor(private weatherService: WeatherService) {}
}
