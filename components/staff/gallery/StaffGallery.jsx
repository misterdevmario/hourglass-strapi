"use client";

import { useInfo } from "@/context/Context";
import Image from "next/image";
import styles from "./StaffGallery.module.css";

const StaffGallery = ({ id, closeModal }) => {
  const { info, updateStaff, handleStaffImage } = useInfo();
  return (
    <div className={styles.container}>
      <h1>Elige una imagen</h1>
      <div className={styles.image_container}>
        {info.staffGallery.map((item, i) => (
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
                  ? updateStaff({ staffImg: item }, id)
                  : handleStaffImage(item);
              }
              closeModal();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StaffGallery;
