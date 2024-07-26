import { Inter } from "next/font/google";
import "@/app/global.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: '${inter.style.fontFamily}';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('/fonts/inter-latin.woff2') format('woff2');
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
          {/* Ensure it's inside the main content */}
        </main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
