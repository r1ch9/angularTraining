import { Injectable } from '@angular/core';

import packageInfo from '../../data/data.json'; 

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  private _citiesList = packageInfo.cityData;
  private _listToShow = this._citiesList;
  private _textToFilter = '';

  constructor() {}

  get getCitiesLists() {
    if (this._textToFilter !== ''){
      this._listToShow = this._citiesList.filter((city) => city.includes(this._textToFilter));
      return [...this._listToShow];
    }

    return [...this._citiesList];
  }

  countryName(value: string) {
    this._textToFilter = value;
  }
}
