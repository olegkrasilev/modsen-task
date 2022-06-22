/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { useGetWeatherApiQuery } from 'shared/api/api';
import styles from './styles.module.scss';

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

  const { isLoading, isError } = useGetWeatherApiQuery({ lat, lon });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <section className={styles.wrapper}>
      <h1>1</h1>
      <h1>2</h1>
    </section>
  );
};

export default Main;
