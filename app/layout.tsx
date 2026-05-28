import type { Metadata } from "next";
import { Manrope } from 'next/font/google';

import "./globals.css";
import AosProvider from "./components/shared/AosProvider/AosProvider";
import Navbar from "./components/shared/navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";

const manrope = Manrope({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "MITRA BUMI ORGANIK",
  description: "Mengamankan supply langsung kemiri kualitas premium. hingga distribusi global, kami menyesuaikan hasil panen sesuai dengan spesifikasi tahunan Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
        <Navbar/>
          <AosProvider>
            {children}
          </AosProvider>
        <Footer/>
      </body>
    </html>
  );
}
