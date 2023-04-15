import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LocationServiceService } from '../services/location.service';
import { ListOfItemsComponent } from './components/list-of-items/list-of-items.component';

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

   addCity(city: string) {
    this.locationService.addCity(city);
  }

   constructor(private locationService: LocationServiceService) {}
}
