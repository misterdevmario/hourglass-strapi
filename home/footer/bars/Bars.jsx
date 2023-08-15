import { useInfo } from "@/context/Context";
import Image from "next/image";
import { sectionTitles, qr } from "@/lib/language";
import styles from "./Bars.module.css";

const Bars = () => {
  const { info, language, languageMobile } = useInfo();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          {language == "en" ? sectionTitles?.en.bars : sectionTitles?.es.bars}
        </div>

        <div className={styles.card_container}>
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
          {languageMobile == "en" ? sectionTitles?.en.bars : sectionTitles?.es.bars}
        </div>

        <div className={styles.card_container}>
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
