//import Staff from "./staff/Staff";
import Dining from "./dining/Dining";
import Breakfast from "./breakfast/Breakfast";
import Bars from "./bars/Bars";
import Flyers from "./flyers/Flyers";
import styles from "./FooterRender.module.css"
import Staff from "./staff/Staff";

const FooterRender = () => {
  return (
    <div className={styles.container}>
      <div className={styles.staff}>
        <Staff />
      </div>
      <div className={styles.dining}>
        <Dining />
      </div>
      <div className={styles.breakfast}>
        <Breakfast/>
      </div>
      <div className={styles.bars}>
        <Bars/>
      </div>
      <div className={styles.flyers}>
        <Flyers/>
      </div>
    </div>
  );
};

export default FooterRender;
