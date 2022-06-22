import React, { useState } from 'react';
import { useCallOpenWeatherApiQuery } from 'shared/api/openWeatherApi';
import WeatherForecast from './ui';

const Main: React.FC = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  navigator.geolocation.getCurrentPosition(
    position => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    },
    () => {},
    { maximumAge: 60000, timeout: 10000, enableHighAccuracy: true },
  );

  const { data, isLoading, isError } = useCallOpenWeatherApiQuery({ lat, lon });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong...</h1>;
  }

  if (!data) {
    return <h1>Something went wrong...</h1>;
  }

  const city = data.name;
  const temperatureCelcius = Math.round(data.main.temp - 273.15);
  // 273.15 Formula to convert Kelvin to Celsius
  const { description, icon } = data.weather[0];

  return <WeatherForecast city={city} temperatureCelcius={temperatureCelcius} description={description} icon={icon} />;
};

export default Main;
