"use client";

import Activities from "@/home/activities/Activities";
import HeaderRender from "../home/header/HeaderRender";
import FooterRender from "@/home/footer/FooterRender";
import Transition from "@/home/transition/Transition";
import { useEffect, useState } from "react";

export default function Page() {
  const [show, setShow] = useState("hide");

  useEffect(()=>{
    setTimeout(()=>{
      setShow("show")
    },3000)
  })

  return (
    <main>
      <Transition />
      <div className={show}>
        <HeaderRender />
        <Activities />
        <FooterRender />
      </div>
    </main>
  );
}
