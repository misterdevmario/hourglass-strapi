import { useInfo } from "@/context/Context";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./transition.css";

const Transition = () => {
  const [className, setClassName] = useState("none");
  const { language, info } = useInfo();

  useEffect(() => {
    if (info.activities.length == 0 || language == "en" || language == "es") {
      setClassName("transition");
    }
    setTimeout(() => {
      setClassName("none");
    }, 3000);
  }, [language, info.activities]);

  return (
    <div className={className}>
      <Image src="/logo.svg" width={500} height={500} alt="hourglass logo" />
    </div>
  );
};

export default Transition;
