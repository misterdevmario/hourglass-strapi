"use client";

import { useInfo } from "@/context/Context";
import Image from "next/image";

export default function Home() {
  const { info } = useInfo();

//console.log(info.activitiesGallery)
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-24">
Home
    </main>
  );
}
