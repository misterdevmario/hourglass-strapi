"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { CiLocationOn } from "react-icons/ci";
import { time } from "@/lib/language";
import { useInfo } from "@/context/Context";
import Image from "next/image";
import styles from "./Activities.module.css";
import Modal from "@/components/modal/Modal";
import { useModal } from "@/components/modal/useModal";
import { useState } from "react";

const Activities = () => {
  const { info, language, languageMobile } = useInfo();
  const [isOpenActivity, openActivity, closeActivity] = useModal(true);
  const [imgDesc, setImgDesc] = useState();

  const sortedHours = [];
  for (let i = 0; i < time.length; i++) {
    for (let j = 0; j < info?.activities.length; j++) {
      if (
        time[i] ==
        info?.activities[j].attributes.hours
          .toLocaleLowerCase()
          .replace(" ", "")
      )
        sortedHours.push(info?.activities[j]);
    }
  }
  const handleImg = (id) => {
    const image = info.activities
      .filter((item) => item.id == id)
      .map((item) => item.attributes.activitieImage)
      .toString();
    setImgDesc(image);
  };

  return (
    <>
      <Modal isOpen={isOpenActivity} closeModal={closeActivity}>
        <div className={styles.modal_img}>
          <Image src={imgDesc} alt="menu" width={600} height={800} />
          <div className={styles.modaldesc}>
            <div className={styles.modaldesc_item}>
              <div className={styles.modaldesc_desc}>Activity description</div>
              <div>A brief description of the activity displayed</div>
            </div>
            <div className={styles.modaldesc_item}>
              <div className={styles.modaldesc_desc}>
                descripcion de la actividad
              </div>
              <div>Breve descripcion de la imagen mostrada</div>
            </div>
          </div>
        </div>
      </Modal>
      <div className={styles.container_lg}>
        <Swiper
          className={styles.slideshow_lg}
          spaceBetween={3}
          slidesPerView={6}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {sortedHours.map((item, i) => (
            <SwiperSlide
              key={i}
              className={styles.slide}
              onClick={(id) => {
                openActivity();
                handleImg(item.id);
              }}
            >
              <div className={styles.card}>
                <Image
                  src={item.attributes.activitieImage}
                  alt={
                    language?.lang == "en"
                      ? item.attributes.activitieEn
                      : item.attributes.activitieEs
                  }
                  width={400}
                  height={600}
                  priority
                />
                <div className={styles.infocard}>
                  <div className={styles.hours}>{item.attributes.hours}</div>
                  <div className={styles.locationactivity}>
                    <div className={styles.activity}>
                      {language == "en"
                        ? item.attributes.activitieEn
                        : item.attributes.activitieEs}
                    </div>
                    <div className={styles.location}>
                      <div className={styles.loctaion_pin}>
                        <CiLocationOn size={25} />
                      </div>
                      <div>
                        {language == "en"
                          ? item.attributes.spotEn
                          : item.attributes.spotEs}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 768px */}
        <Swiper
          className={styles.slideshow_sm}
          spaceBetween={3}
          slidesPerView={2}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {sortedHours.map((item, i) => (
            <SwiperSlide
              key={i}
              className={styles.slide}
              onClick={(id) => {
                openActivity();
                handleImg(item.id);
              }}
            >
              <div className={styles.card}>
                <Image
                  src={item.attributes.activitieImage}
                  alt={
                    languageMobile == "en"
                      ? item.attributes.activitieEn
                      : item.attributes.activitieEs
                  }
                  width={400}
                  height={600}
                  priority
                />
                <div className={styles.infocard}>
                  <div className={styles.hours}>{item.attributes.hours}</div>
                  <div className={styles.locationactivity}>
                    <div className={styles.activity}>
                      {languageMobile == "en"
                        ? item.attributes.activitieEn
                        : item.attributes.activitieEs}
                    </div>
                    <div className={styles.location}>
                      <div className={styles.loctaion_pin}>
                        <CiLocationOn />
                      </div>
                      <div>
                        {language == "en"
                          ? item.attributes.spotEn
                          : item.attributes.spotEs}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Activities;
