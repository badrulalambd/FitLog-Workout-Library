import type { Metadata } from "next";
import {  Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
   weight: ['400', '700'],
});



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Navbar />
        <main>
          {children}
        </main>
        <ToastContainer />

      </body>
    </html>
  );
}
