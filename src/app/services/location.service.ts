import { Injectable } from '@angular/core';

import packageInfo from '../../data/data.json'; 
import { CityDatum } from '../interfaces/cities.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  private _citiesList: CityDatum[] = packageInfo.cityData;
  private _listToShow: CityDatum[] = this._citiesList;
  private _textToFilter: string = '';
  private _selectedCities: CityDatum[] = [];

  constructor() {}

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
    this._textToFilter = value;
  }

  addCity(city: CityDatum){
    if(this._selectedCities.includes(city)) {
      return;
    }

    this._selectedCities.unshift(city);
  }
}
