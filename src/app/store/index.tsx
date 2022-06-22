import { configureStore } from '@reduxjs/toolkit';
import { callOpenWeatherApi } from '../../shared/api/openWeatherApi';

const store = configureStore({
  reducer: { [callOpenWeatherApi.reducerPath]: callOpenWeatherApi.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(callOpenWeatherApi.middleware),
});

export default store;
