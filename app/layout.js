"use client"
import './globals.css'
import Navbar from "@/components/navbar/Navbar";
import { Provider } from "@/context/Context";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const pathname = usePathname()

  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          {pathname.includes("/login")? null : <Navbar/>}
          {children}
        </body>
      </Provider>
    </html>
  );
}
