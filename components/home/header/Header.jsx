'use client'

import Image from "next/image"
import styles from "./Header.module.css"
import { useInfo } from "@/context/Context"


const Header = () => {

const {timeDate} = useInfo()

  return (
    <div className={styles.container}>
        <div className={styles.clock} >{timeDate.minutes}</div>
        <div className={styles.logo}>
            <Image
            src='/breathless.png'
            width={200}
            height={200}
            alt="logo breathless"
            priority
            />
        </div>
        <div className={styles.weather}>Weather</div>
    </div>
  )
}

export default Header

