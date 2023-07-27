import Image from "next/image";
import React from "react";
import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/breathless.png"
        width={200}
        height={300}
        priority
        alt="logo breathless"
      />
    </div>
  );
};

export default Logo;
