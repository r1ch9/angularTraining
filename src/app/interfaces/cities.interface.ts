export interface Cities {
    cityData: CityDatum[];
}

export interface CityDatum {
    name:    string;
    lat:     number;
    lon:     number;
    country: string;
    state:   string;
}
