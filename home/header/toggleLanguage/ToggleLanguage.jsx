"use client"

import { IoLanguageSharp, IoCloseCircleSharp } from "react-icons/io5";
import { useInfo } from "@/context/Context";
import styles from "./ToggleLanguage.module.css"
import { useState } from "react";



const ToggleLanguage = () => {
    const [toggle, setToggle] = useState(true);
    const {changeLanguageMobile} = useInfo()
  return (
    <div>
    <div className={styles.langicon}>
      {!toggle ? (
        <IoLanguageSharp size={45} onClick={() => setToggle(true)} />
      ) : (
        <IoCloseCircleSharp size={45} onClick={() => setToggle(false)} />
      )}
    </div>
    {toggle && (
      <div className={styles.langcontainer}>
        <h2>Bienvenido</h2>
        <h2>Welcome</h2>
        <div
          onClick={()=>{changeLanguageMobile("es"); setToggle(false)}}
          className={styles.es}
        >
          <div>Seleccionar español</div>
          <h1>Es</h1>
        </div>
        <div
          onClick={()=>{changeLanguageMobile("en"); setToggle(false)}}
          className={styles.en}
        >
          <div>Select english</div>
          <h1>En</h1>
        </div>
      </div>
    )}
  </div>
  )
}

export default ToggleLanguage