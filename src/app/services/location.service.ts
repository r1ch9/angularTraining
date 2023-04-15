import { Injectable } from '@angular/core';

import packageInfo from '../../data/data.json'; 

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  private _citiesList: string[] = packageInfo.cityData;
  private _listToShow: string[] = this._citiesList;
  private _textToFilter: string = '';
  private _selectedCities: string[] = [];

  constructor() {}

  get getCitiesLists() {
    if (this._textToFilter !== ''){
      this._listToShow = this._citiesList.filter((city) => city.toLowerCase().includes(this._textToFilter.toLowerCase()));
      return [...this._listToShow];
    }

    return [...this._citiesList];
  }

  countryName(value: string) {
    this._textToFilter = value;
  }

  addCity(city: string){
    if(this._selectedCities.includes(city)) {
      return;
    }

    this._selectedCities.unshift(city);
    console.log(this._selectedCities)
  }
}
