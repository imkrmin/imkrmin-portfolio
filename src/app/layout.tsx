import type { Metadata } from "next";
import localFont from "next/font/local";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import "./globals.css";
import { METADATA } from "@/constants/metadata";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
  openGraph: {
    title: METADATA.title,
    description: METADATA.description,
    images: [
      {
        url: METADATA.imageUrl,
        width: 800,
        height: 600,
      },
    ],
    locale: METADATA.locale,
    type: METADATA.type,
  },
  creator: METADATA.creator,
  generator: METADATA.generator,
  publisher: METADATA.publisher,
  applicationName: METADATA.publisher,
  keywords: METADATA.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className="relative font-pretendard flex flex-col w-full mx-auto justify-center">
        {children}
        <ScrollToTopButton />
        <div id="modal" />
      </body>
    </html>
  );
}
