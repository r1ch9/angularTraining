import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// Personal Components
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { LocationComponent } from '../location/location.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

// Services
import { WeatherService } from '../../services/weather.service';
import { Store } from '@ngrx/store';

import { CityWeather, cityWeatherStore } from 'src/app/interfaces/cityWeather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule, 
    NavbarComponent, 
    LocationComponent,
    WeatherCardComponent
  ]
})
export class WeatherPage {

  constructor(private weatherService: WeatherService, private weatherStore: Store<cityWeatherStore>){
    this.weatherStore
      .subscribe((weatherCity: any) => {
        // this.listOfSelectedCities = [...weatherCity.weather.weatherCities]
      })
  }

  get listOfSelectedCities() {
    this.weatherService.listOfSelectedCities.map((item) => {
      this.weatherService.req(item)
    });
    
    return this.weatherService.listOfWeather;
  }
}
