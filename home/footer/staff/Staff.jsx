import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useInfo } from "@/context/Context";
import Image from "next/image";
import { sectionTitles } from "@/lib/language";
import styles from "./Staff.module.css";
import { useState } from "react";
import Modal from "@/components/modal/Modal";
import { useModal } from "@/components/modal/useModal";

const Staff = () => {
  const { info, language, languageMobile } = useInfo();
  const [isOpenActivity, openActivity, closeActivity] = useModal(true);

  const [imgDesc, setImgDesc] = useState();

  const handleImg = (id) => {
    const image = info.staff
      .filter((item) => item.id == id)
      .map((item) => item.attributes.staffImg)
      .toString();
    setImgDesc(image);
  };

  return (
    <div className={styles.staffcontainer}>
      <Modal isOpen={isOpenActivity} closeModal={closeActivity}>
        <div className={styles.modal_img}>
          <Image src={imgDesc} alt="menu" width={600} height={800} />
          <div className={styles.modaldesc}>
            <div className={styles.modaldesc_item}>
              <div className={styles.modaldesc_desc}>Activity description</div>
              <div>A brief description of the staff bio displayed</div>
            </div>
            <div className={styles.modaldesc_item}>
              <div className={styles.modaldesc_desc}>
                descripcion de la actividad
              </div>
              <div>Breve descripcion de la bio del staff mostrado</div>
            </div>
          </div>
        </div>
      </Modal>
      <div className={styles.stafftitle}>
        {language == "en" ? sectionTitles.en.staff : sectionTitles.es.staff}
      </div>
      <Swiper
        className={styles.staffslideshow_lg}
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 4300,
          disableOnInteraction: false,
        }}
      >
        {info?.staff.map((item, i) => (
          <SwiperSlide key={i}>
            <div className={styles.staffcard} onClick={() => {openActivity(); handleImg(item.id)}}>
              <Image
                src={item.attributes.staffImg}
                alt="staff"
                width={400}
                height={600}
                priority
              />{" "}
              <div className={styles.staffinfo}>
                <div className={styles.name}>{item.attributes.name}</div>
                <div className={styles.position}>
                  {item.attributes.position}
                </div>
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
          <SwiperSlide key={i}  onClick={(id) => {
            openActivity();
            handleImg(item.id);
          }}>
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
                <div className={styles.position}>
                  {item.attributes.position}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Staff;
