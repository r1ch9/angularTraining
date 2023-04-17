import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

// Personal Components
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { LocationComponent } from '../location/location.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

// Services
import { WeatherService } from '../../services/weather.service';


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
  constructor(private weatherService: WeatherService){}

  get listOfSelectedCities() {
    return this.weatherService.listOfSelectedCities;
  }
}
