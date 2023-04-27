import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import packageInfo from '../../data/data.json'; 
import { CityDatum, locationStore } from '../interfaces/cities.interface';

//Actions
import { getListLocations, removeLocation, selectNewLocation, setCountryName } from '../ngrx/sharedStates/sharedStates.actions';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {
  private _citiesList: CityDatum[] = packageInfo.cityData;
  private _listToShow: CityDatum[] = this._citiesList;
  private _textToFilter: string = '';
  private _selectedCities: CityDatum[] = [];

  constructor(private store: Store<locationStore>) {
    this.store.select('location')
      .subscribe((location) => {
        this._textToFilter = location.textToFilter;
        this._selectedCities = [...location.selectedCities];
      });
  }

  get getCitiesLists() {
    if (this._textToFilter !== ''){
      this._listToShow = this._citiesList.filter((city) => city.name.toLowerCase().includes(this._textToFilter.toLowerCase()));
      return [...this._listToShow];
    }

    return [...this._citiesList];
  }

  get selectedCitiesList() {
    return [...this._selectedCities]
  }

  countryName(value: string) {
    this.store.dispatch(setCountryName({value}))
  }

  addCity(city: CityDatum){
    if(!this._selectedCities.includes(city)){
      this.store.dispatch(selectNewLocation({city}));
    }
  }

  removeCity(city: CityDatum){
    const items = this._selectedCities.filter((item) => item.name !== city.name);
    this.store.dispatch(removeLocation({cities: items}));
  }
}
