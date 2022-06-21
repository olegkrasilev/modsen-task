import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { geoPosition } from '.';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const callOpenWeatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather?lat=',
  }),
  endpoints: builder => ({
    getWeatherApi: builder.query<any, geoPosition>({
      query: args => {
        const { lat, lon } = args;
        return `${lat}&lon=${lon}&appid=${API_KEY}`;
      },
    }),
  }),
});

export const { useGetWeatherApiQuery } = callOpenWeatherApi;
