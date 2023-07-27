"use client";

import Activities from "@/home/activities/Activities";
import HeaderRender from "../home/header/HeaderRender"
import FooterRender from "@/home/footer/FooterRender";



export default function page() {
  return (
    <main>
      <HeaderRender/>
      <Activities/>
      <FooterRender/>
    </main>
  );
}
