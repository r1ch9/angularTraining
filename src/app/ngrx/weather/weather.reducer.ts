import { createReducer, on } from "@ngrx/store";

// Interfaces
import { cityWeatherStore, weatherCity } from "src/app/interfaces/cityWeather.interface";

// Actions
import { addNewCityweather, getCityWeather, setCityweather } from "./weather.actions";

const weatherCities: weatherCity[] = [];

const initialState: cityWeatherStore = {
    weatherCities,
}

export const weatherReducer = createReducer(
    initialState,
    on(addNewCityweather, (state, { city }) => ({...state, weatherCities: [...state.weatherCities, city]})),
    on(getCityWeather, (state) => state),
    on(setCityweather, (state, { list }) => ({...state, weatherCities: [...list]}))
)