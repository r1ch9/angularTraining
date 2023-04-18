import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Components y Servicios
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { LocationServiceService } from 'src/app/services/location.service';
import { NewsCityComponent } from './components/news-city/news-city.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, NavbarComponent, NewsCityComponent]
})
export class NewsPage {
  constructor(private locationService: LocationServiceService) { }

  get selectedCities() {
    return this.locationService.selectedCitiesList
  }
}
