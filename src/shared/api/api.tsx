import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.openweathermap.org/data/2.5/weather?id=625144&appid=ac0f5ada92348dc24ec79caef061b5dc',
  }),
  endpoints: build => ({
    getWeatherApi: build.query({
      query: () => '',
    }),
  }),
});

export const { useGetWeatherApiQuery } = weatherApi;
