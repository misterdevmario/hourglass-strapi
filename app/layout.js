"use client";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Provider } from "@/context/Context";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false)

  useEffect(()=>{
    pathname == "/login" || pathname == '/'? setNavbar(false) : setNavbar(true)
  },[pathname])

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {navbar && (<Navbar />)}
          {children}
        </Provider>
      </body>
    </html>
  );
}
