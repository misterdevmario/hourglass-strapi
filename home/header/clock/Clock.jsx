"use client";

import { useEffect, useState } from "react";
import { useInfo } from "@/context/Context";
import { daysEn, daysEs, monthsEn, monthsEs } from "../../../lib/language";
import styles from "./Clock.module.css"


let zero = "0";

const Clock = () => {
  const { language, languageMobile } = useInfo();
  const [timeDate, setTimeDate] = useState();

  useEffect(() => {
    let dayNumber = new Date().getDate();
    let day = new Date().getDay();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    setTimeDate({
      dayNumber: dayNumber,
      dayEn: daysEn[day],
      dayEs: daysEs[day],
      monthEn: monthsEn[month],
      monthEs: monthsEs[month],
      year: year,
      hour: hour,
      minutes: minutes,
      seconds: seconds,
    });
  }, []);

  const updateTime = () => {
    let dayNumber = new Date().getDate();
    let day = new Date().getDay();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    setTimeDate({
      dayNumber: dayNumber,
      dayEn: daysEn[day],
      dayEs: daysEs[day],
      monthEn: monthsEn[month],
      monthEs: monthsEs[month],
      year: year,
      hour: hour,
      minutes: minutes,
      seconds: seconds,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => updateTime(), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.clock_container}>
      <div className={styles.clock_container_info}>
        <div className={styles.hour}>
          {timeDate?.hour > 12 ? timeDate?.hour - 12 : timeDate?.hour}:
          {timeDate?.minutes < 10
            ? zero + timeDate?.minutes
            : timeDate?.minutes}
          {timeDate?.hour < 12 ? "AM" : "PM"}
        </div>
        <div className={styles.date}>
          {language == "en" ? timeDate?.monthEn : timeDate?.monthEs},{" "}
          {timeDate?.dayNumber}, {timeDate?.year}
          <div className={styles.day}>
            {language == "en" ? timeDate?.dayEn : timeDate?.dayEs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
