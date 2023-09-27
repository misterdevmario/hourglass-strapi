import { useInfo } from "@/context/Context";
import styles from "./Dining.module.css";
import Image from "next/image";
import { sectionTitles } from "@/lib/language";
import { useModal } from "@/components/modal/useModal";
import Modal from "@/components/modal/Modal";
const Dining = () => {
  const { info, language, languageMobile } = useInfo();
  const [isOpenDining, openDining, closeDining] = useModal(true);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          {language == "en" ? sectionTitles.en.dining : sectionTitles.es.dining}
        </div>
        <div className={styles.card_container} onClick={() => openDining()}>
          <Modal isOpen={isOpenDining} closeModal={closeDining}>
            <div className={styles.modal_img}>
              <Image
                src="/menu/menu1.jpg"
                alt="menu"
                width={1000}
                height={1500}
              />
            </div>
          </Modal>
          {info.dinning.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.name}>{item.attributes.name}</div>
              <div className={styles.restaurants_info_container}>
                <div className={styles.logo}>
                  <Image
                    src={item.attributes.diningImg}
                    width={80}
                    height={80}
                    alt="restaurant logo"
                  />
                </div>
                <div className={styles.iconsinfo}>
                  <div className={styles.icons_container}>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/clock.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/menu.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/buffet.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/members.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                  </div>
                  <div className={styles.info_container}>
                    <div className={styles.info}>{item.attributes.hours}</div>
                    <div className={styles.info}>
                      {language == "en"
                        ? item.attributes.typeEn
                        : item.attributes.typeEs}
                    </div>
                    <div className={styles.info}>
                      {language == "en"
                        ? item.attributes.serviceEn
                        : item.attributes.serviceEs}
                    </div>
                    <div className={styles.info}>
                      {language == "en"
                        ? item.attributes.membersEn
                        : item.attributes.membersEs}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 768px */}
      <div className={styles.container_sm}>
        <div className={styles.title}>
          {languageMobile == "en"
            ? sectionTitles.en.dining
            : sectionTitles.es.dining}
        </div>
        <div className={styles.card_container} onClick={() => openDining()}>
          <Modal isOpen={isOpenDining} closeModal={closeDining}>
            <div className={styles.modal_img}>
              <Image
                src="/menu/menu1.jpg"
                alt="menu"
                width={1000}
                height={1500}
              />
            </div>
          </Modal>
          {info.dinning.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.name}>{item.attributes.name}</div>
              <div className={styles.restaurants_info_container}>
                <div className={styles.logo}>
                  <Image
                    src={item.attributes.diningImg}
                    width={80}
                    height={80}
                    alt="restaurant logo"
                  />
                </div>
                <div className={styles.iconsinfo}>
                  <div className={styles.icons_container}>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/clock.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/menu.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/buffet.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/members.svg"
                        width={21}
                        height={21}
                        alt="restaurant logo"
                      />
                    </div>
                  </div>
                  <div className={styles.info_container}>
                    <div className={styles.info}>{item.attributes.hours}</div>
                    <div className={styles.info}>
                      {languageMobile == "en"
                        ? item.attributes.typeEn
                        : item.attributes.typeEs}
                    </div>
                    <div className={styles.info}>
                      {languageMobile == "en"
                        ? item.attributes.serviceEn
                        : item.attributes.serviceEs}
                    </div>
                    <div className={styles.info}>
                      {languageMobile == "en"
                        ? item.attributes.membersEn
                        : item.attributes.membersEs}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dining;
