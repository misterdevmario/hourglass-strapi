"use client";

import { useInfo } from "@/context/Context";
import Image from "next/image";
import styles from "./ActivitiesGallery.module.css";

const ActivitiesGallery = ({id, closeModal}) => {
  const {info, updateActivity,handleImage, postActivity } = useInfo();


  return (
    <div className={styles.container}>
      <h1>Elige una imagen</h1>
      <div className={styles.image_container}>
        {info.activitiesGallery.map((item, i) => (
          <Image
            key={i}
            src={item}
            alt="activity"
            width={100}
            height={200}
            priority
            onClick={() => {{id?updateActivity({activitieImage: item}, id): handleImage(item);}; closeModal()}}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesGallery;
