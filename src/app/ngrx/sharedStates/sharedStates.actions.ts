import { createAction, props } from '@ngrx/store';

// Interfaces Import
import { CityDatum } from 'src/app/interfaces/cities.interface';

export const selectNewLocation = createAction(
    '[Locations] selectLocations',
    props<{city: CityDatum}>()
);

export const removeLocation = createAction(
    '[Locations] removeLocation',
    props<{cities: CityDatum[]}>()
);

export const setCountryName = createAction(
    '[Locations] setCountryName',
    props<{value: string}>()
);