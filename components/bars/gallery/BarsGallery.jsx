"use client";

import { useInfo } from "@/context/Context";
import Image from "next/image";
import styles from "./BarsGallery.module.css";
const BarsGallery = ({ id, closeModal }) => {
  const { info, updateBar, handleImage } = useInfo();
  return (
    <div className={styles.container}>
      <h1>Elige una imagen</h1>
      <div className={styles.image_container}>
        {info.barsrestaurantsGallery.map((item, i) => (
          <Image
            key={i}
            src={item}
            alt="bar"
            width={250}
            height={500}
            priority
            onClick={() => {
              {
                id !== null
                  ? updateBar({ barImg: item }, id)
                  : handleImage(item);
              }
              closeModal();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BarsGallery;
