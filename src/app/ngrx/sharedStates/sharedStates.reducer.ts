import { Action } from "@ngrx/store";
import { createReducer, on } from '@ngrx/store';

// Interfaces Import
import { CityDatum } from 'src/app/interfaces/cities.interface';

// Actions
import { getListLocations, removeLocation, selectNewLocation, setCountryName } from "./sharedStates.actions";

import packageInfo from '../../../data/data.json'; 
const listOfCities = packageInfo.cityData;

// Initial state
const initialState: storeData = {
    listOfCities,
    selectedCities: [],
    textToFilter: '',
};

// Store reducer
export const locationReducer = createReducer(
    initialState,
    on(selectNewLocation, (state, { city }) => ({ ...state, selectedCities: [...state.selectedCities, city] })),
    on(removeLocation, (state, props) => ({...state, selectedCities: props.cities})),
    on(setCountryName, (state, props) => ({...state, textToFilter: props.value})),
    on(getListLocations, (state) => state)
);

// Interfaces
interface storeData {
    listOfCities: any[],
    selectedCities: CityDatum[],
    textToFilter: string,
}