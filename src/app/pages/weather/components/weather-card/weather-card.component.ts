import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

// Interface
import { CityDatum } from 'src/app/interfaces/cities.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class WeatherCardComponent{
  @Input('city') city: CityDatum = {
    name: '',
    lat: 0,
    lon: 0,
    country: '',
    state: '',
  };
  @Input('currentWeather') currentWeather: string = '';
}
