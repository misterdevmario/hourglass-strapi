"use client";

import Clock from "./clock/Clock";
import styles from "./HeaderRender.module.css";

import React from "react";
import Weather from "./weather/Weather";
import Logo from "./logo/Logo";
import ToggleLanguage from "./toggleLanguage/ToggleLanguage";

const HeaderRender = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.clock}>
        <Clock />
      </div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.weather}>
        <Weather />
      </div>
      <div className={styles.language}>
        <ToggleLanguage />
      </div>
    </div>
  );
};

export default HeaderRender;
