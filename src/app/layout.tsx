import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


export const metadata: Metadata = {
  title: "Infomily",
  description: "the best plataform to archive your documents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar/>
        <div className="mx-10">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
