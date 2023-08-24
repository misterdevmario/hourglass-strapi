"use client";

import { useInfo } from "@/context/Context";
import Image from "next/image";
import { sectionTitles, qr } from "@/lib/language";
import styles from "./Bars.module.css";
import Modal from "@/components/modal/Modal";
import { useModal } from "@/components/modal/useModal";
//import Pdfviewer from "@/home/PDF/PdfViewer";

const Bars = () => {
  const { info, language, languageMobile } = useInfo();
  const [isOpenBar, openBar, closeBar] = useModal(true);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          {language == "en" ? sectionTitles?.en.bars : sectionTitles?.es.bars}
        </div>

        <div className={styles.card_container} onClick={() => openBar()}>
          <Modal isOpen={isOpenBar} closeModal={closeBar}>
            <div className={styles.modal_img}>
              <Image
              src='/menu/menu1.jpg'
              alt="menu"
              width={1000}
              height={1500}
              />
            </div>
          </Modal>
          {info?.bars.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imginfo}>
                <Image
                  src={item.attributes.barImg}
                  alt="bar logo"
                  width={80}
                  height={80}
                />
                <div className={styles.hours}>
                  <div className={styles.name}>{item.attributes.name}</div>
                  {item.attributes.hours}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.qr}>
          <Image src="/qr.png" width={240} height={240} alt="qr" />
          <div className={styles.scan}>{language == "en" ? qr.en : qr.es}</div>
        </div>
      </div>
      {/* 768px */}
      <div className={styles.container_sm}>
        <div className={styles.title}>
          {languageMobile == "en"
            ? sectionTitles?.en.bars
            : sectionTitles?.es.bars}
        </div>

        <div className={styles.card_container}onClick={() => openBar()}>
        <Modal isOpen={isOpenBar} closeModal={closeBar}>
            <div className={styles.modal_img}>
              <Image
              src='/menu/menu1.jpg'
              alt="menu"
              width={1000}
              height={1500}
              />
            </div>
          </Modal>
          {info?.bars.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imginfo}>
                <Image
                  src={item.attributes.barImg}
                  alt="bar logo"
                  width={80}
                  height={80}
                />
                <div className={styles.hours}>
                  <div className={styles.name}>{item.attributes.name}</div>
                  {item.attributes.hours}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bars;
