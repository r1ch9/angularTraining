import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';

// Importaciones
import { LocationServiceService } from '../../services/location.service';
import { ListOfItemsComponent } from './components/list-of-items/list-of-items.component';

// Interface
import { CityDatum } from 'src/app/interfaces/cities.interface';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  standalone: true, 
  imports: [IonicModule, CommonModule, ListOfItemsComponent]
})
export class LocationComponent {
  title: string = 'add a new location';

  @ViewChild('inputValue') inputValue: any;

  get citiesLists(){
    return this.locationService.getCitiesLists;
  }

  sendCountryName() {
    this.locationService.countryName(this.inputValue.value)
  }

  addCity(city: CityDatum) {
    this.locationService.addCity(city);
  }

   constructor(private locationService: LocationServiceService) {}
}
