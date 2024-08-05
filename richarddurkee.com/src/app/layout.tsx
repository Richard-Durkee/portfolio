import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { roboto_mono } from "@/app/fonts";
import "./globals.css";
import NavBar from "./navbar";
import Link from "next/link"; 

export const metadata: Metadata = {
  title: {
    template: '%s | Richard F. Durkee',
    default: 'Home',
  },
  description: 'Software Engineer',
  metadataBase: new URL('https://richarddurkee.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.className} antialiased`}>
        <NavBar />
        <div className="mx-auto px-10 mt-24 md:mt-1">
          
        {/* <Link
            key={"/"}
            href={"/"}
            className="flex h-[48px] w-[48px] grow justify-center gap-2 rounded-md p-3 text-md text-white font-medium hover:bg-sky-100 hover:text-blue-600 mb-4"
          >
            {"<"}
          </Link> */}
         {children}
        </div>
      </body>
    </html>
  );
}
