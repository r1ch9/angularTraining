import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

// Components
import { LocationComponent } from 'src/app/pages/location/location.component';
import { WeatherPage } from 'src/app/pages/weather/weather.page';
import { NewsPage } from 'src/app/pages/news/news.page';

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
  constructor(private router: Router){}
  isOnHomePage: boolean = this.router.url === '/home'; 
  
  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
