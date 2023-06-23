"use client";

import { useInfo } from "@/context/Context";
import Image from "next/image";
import styles from "./FlyersGallery.module.css";

const FlyersGallery = ({ id, closeModal }) => {
  const { info, updateFlyer, handleFlyerImage } = useInfo();
  return (
    <div className={styles.container}>
      <h1>Elige una imagen</h1>
      <div className={styles.image_container}>
        {info.flyersGallery.map((item, i) => (
          <Image
            key={i}
            src={item}
            alt="staff"
            width={250}
            height={500}
            priority
            onClick={() => {
              {
                id !== null
                  ? updateFlyer({ flyerImg: item }, id)
                  : handleFlyerImage(item);
              }
              closeModal();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FlyersGallery;
