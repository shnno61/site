import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/global.css';
import Navbar from './../components/Navbar';
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live Smart",
  description: "introduece the best smart devices that you can use to make you live easier and confortable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
