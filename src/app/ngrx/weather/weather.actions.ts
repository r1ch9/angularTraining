import { createAction, props } from '@ngrx/store';

// Interfaces
import { weatherCity } from 'src/app/interfaces/cityWeather.interface';

export const addNewCityweather = createAction(
    '[Weather] addNewCityWeather',
    props<{city: weatherCity}>()
);

export const getCityWeather = createAction(
    '[Weather] addNewCityWeather'
);