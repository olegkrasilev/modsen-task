import React from 'react';
import styles from './styles.module.scss';

interface Properties {
  city: string;
  temperatureCelcius: number;
  description: string;
  icon: string;
}

const WeatherForecast: React.FC<Properties> = ({ city, description, icon, temperatureCelcius }) => (
  <main className={styles.wrapper}>
    <article>
      <h1>{city}</h1>
      <ul>
        <li>{description}</li>
        <li>{temperatureCelcius}℃</li>
        <li>
          <img
            width="50"
            height="50"
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt={`${description}`}
            loading="eager"
          />
        </li>
      </ul>
    </article>
  </main>
);

export default WeatherForecast;
