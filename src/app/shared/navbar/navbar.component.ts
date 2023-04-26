import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

// Components
import { LocationComponent } from 'src/app/pages/location/location.component';
import { WeatherPage } from 'src/app/pages/weather/weather.page';
import { NewsPage } from 'src/app/pages/news/news.page';

//Services
import { LocationServiceService } from 'src/app/services/location.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    LocationComponent, 
    WeatherPage,
    NewsPage
  ]
})
export class NavbarComponent {
  constructor(private router: Router, private _locationService: LocationServiceService){}
  isOnHomePage: boolean = this.router.url === '/home'; 
  
  navigate(route: string) {
    this._locationService.countryName('');
    this.router.navigate([`/${route}`]);
  }
}
