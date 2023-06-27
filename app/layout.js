"use client";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Provider } from "@/context/Context";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {pathname.includes("/login") || pathname.includes("/") ? null : <Navbar />}
          {children}
        </Provider>
      </body>
    </html>
  );
}
