"use client";

import { useState, useEffect } from "react";
import { weatherDesc } from "@/lib/language";
import { useInfo } from "@/context/Context";
import axios from "axios";
import Image from "next/image";
import styles from "./Weather.module.css";

let url = `https://api.openweathermap.org/data/2.5/weather?lat=${22.89088}&lon=${-109.91238}&appid=3ac3a13ff13181d397910c942cb3516e&units=imperial`;

const Weather = () => {
  const [weather, setWeather] = useState();
  const { language } = useInfo();
  const getWeather = async () => {
    const fetchWeather = await axios.get(url);
    setWeather({
      tempEn: Math.floor(fetchWeather?.data.main?.temp) + "°F",
      tempEs: Math.floor((fetchWeather?.data.main?.temp - 32) * 0.5556) + "°C",
      maxTempEn: Math.floor(fetchWeather?.data.main?.temp_max) + "°F",
      maxTempEs:
        Math.floor((fetchWeather?.data.main?.temp_max - 32) * 0.5556) + "°C",
      minTempEn: Math.floor(fetchWeather?.data.main?.temp_min) + "°F",
      minTempEs:
        Math.floor((fetchWeather?.data.main?.temp_min - 32) * 0.5556) + "°C",
      descEn: fetchWeather?.data.weather
        ?.map((item) => item.description)
        .toString(),
      descEs:
        weatherDesc?.weatherEs[
          weatherDesc?.weatherEn.indexOf(
            fetchWeather?.data.weather
              ?.map((item) => item.description)
              .toString()
          )
        ],
      icon: `/Icons/${fetchWeather?.data?.weather?.map(
        (item) => item.icon
      )}.png`,
      location: fetchWeather?.data.name,
    });
  };

  useEffect(() => {
    getWeather();
  }, []);
  useEffect(() => {
    const fetchWeather = setInterval(() => getWeather(), 600000);
    return function cleanup() {
      clearInterval(fetchWeather);
    };
  }, []);
  return (
    <div className={styles.weather_container}>
      <div className={styles.temp}>
        <div className={styles.tempmain}>
        <div className={styles.location}>{weather?.location}</div>
          {language == "en" ? weather?.tempEn : weather?.tempEs}
        </div>
        <div className={styles.tempinfo}>
          <div className={styles.temp_img}>
            <Image
              src={weather?.icon}
              alt="weather"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.temmaxmin}>
            {" "}
            MAX-
            {language == "en" ? weather?.maxTempEn : weather?.maxTempEs} MIN-
            {language == "en" ? weather?.minTempEn : weather?.minTempEs}
          </div>
        </div>
      </div>
      <div className={styles.desc}>
        {language == "en" ? weather?.descEn : weather?.descEs}
      </div>
    </div>
  );
};

export default Weather;
