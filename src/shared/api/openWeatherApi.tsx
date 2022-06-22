import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { geoPosition, OpenWeatherAPIResponse } from '.';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const callOpenWeatherApi = createApi({
  reducerPath: 'openWeatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5',
  }),
  keepUnusedDataFor: 60,
  endpoints: builder => ({
    callOpenWeatherApi: builder.query<OpenWeatherAPIResponse, geoPosition>({
      query: args => {
        const { lat, lon } = args;
        return `weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      },
    }),
  }),
});

export const { useCallOpenWeatherApiQuery } = callOpenWeatherApi;
