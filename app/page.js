"use client";

import Activities from "@/home/activities/Activities";
import HeaderRender from "../home/header/HeaderRender";
import FooterRender from "@/home/footer/FooterRender";
import Transition from "@/home/transition/Transition";

export default function page() {
  return (
    <main>
      <Transition />
      <HeaderRender />
      <Activities />
      <FooterRender />
    </main>

  );
}
