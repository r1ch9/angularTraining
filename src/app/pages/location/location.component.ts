import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';

// Importaciones
import { LocationServiceService } from '../../services/location.service';
import { ListOfItemsComponent } from './components/list-of-items/list-of-items.component';

// Interface
import { CityDatum, locationStore } from 'src/app/interfaces/cities.interface';
import { setCountryName } from 'src/app/ngrx/sharedStates/sharedStates.actions';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  standalone: true, 
  imports: [IonicModule, CommonModule, ListOfItemsComponent]
})
export class LocationComponent {
  title: string = 'add a new location';
  // public citiesLists: CityDatum[] = [];

  @ViewChild('inputValue') inputValue: any;

  // NO = Change the getter and subscribe to store. That is not possible. Handle the data on the service.
  get citiesLists() {
    // this.store.select('location')
    //   .subscribe((location) => {
    //     console.log(location)
    //   })
    return this.locationService.getCitiesLists;
  }

  // Change the logic to call the store instead of the service.
  sendCountryName() {
    const value: string = this.inputValue.value;
    this.store.dispatch(setCountryName({value}));
  }

  addCity(city: CityDatum) {
    this.locationService.addCity(city);
  }
  
  ngAfterViewInit(): void {
    this.locationService.countryName('');
  }

  constructor(private locationService: LocationServiceService, private store: Store<locationStore>) {
    // this.store.select('location')
    //   .subscribe((location) => {
    //     this.citiesLists = location.listOfCities;
    //   })
  }
}
