import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from '../../shared/api/api';

const store = configureStore({
  reducer: { [weatherApi.reducerPath]: weatherApi.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(weatherApi.middleware),
});

export default store;
