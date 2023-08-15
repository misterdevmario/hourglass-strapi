
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useInfo } from "@/context/Context";
import Image from "next/image";
import { sectionTitles } from "@/lib/language";
import styles from "./Staff.module.css";

const Staff = () => {
  const { info, language, languageMobile } = useInfo();

  return (
    <div className={styles.staffcontainer}>
      <div className={styles.stafftitle}>
        {language == "en"
          ? sectionTitles.en.staff
          : sectionTitles.es.staff}
      </div>
      <Swiper
        className={styles.staffslideshow_lg}
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {info?.staff.map((item, i) => (
          <SwiperSlide key={i}>
            <div className={styles.staffcard}>
              <Image
                src={item.attributes.staffImg}
                alt="staff"
                width={400}
                height={600}
                priority
              />{" "}
              <div className={styles.staffinfo}>
                <div className={styles.name}>{item.attributes.name}</div>
                <div className={styles.position}>{item.attributes.position}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile*/}
      <div className={styles.stafftitle_sm}>
        {languageMobile == "en"
          ? sectionTitles.en.staff
          : sectionTitles.es.staff}
      </div>
      <Swiper
        className={styles.staffslideshow_sm}
        spaceBetween={3}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {info?.staff.map((item, i) => (
          <SwiperSlide key={i}>
            <div className={styles.staffcard}>
              <Image
                src={item.attributes.staffImg}
                alt="staff"
                width={400}
                height={600}
                priority
              />
              <div className={styles.staffinfo}>
                <div className={styles.name}>{item.attributes.name}</div>
                <div className={styles.position}>{item.attributes.position}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Staff;