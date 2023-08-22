import { useInfo } from "@/context/Context";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./transition.css"

const Transition = () => {
  const [className, setClassName] = useState("none");
  const { language, info } = useInfo();

  useEffect(() => {
    if (language == "en" || language == "es" ) {
      setClassName("transition");
    }
    setTimeout(() => {
      setClassName("none");
    }, 3000);
  }, [language]);

  return (
    <div className={className}>
      <Image src="/logo.svg" width={500} height={500} alt="hourglass logo" />
    </div>
  );
};

export default Transition;
