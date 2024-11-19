import type { Metadata } from "next";
import localFont from "next/font/local";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import "./globals.css";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "임주민 | 프론트엔드 포트폴리오",
  description: "프론트엔드 개발자 임주민의 개인 포트폴리오입니다.🌟",
  openGraph: {
    title: "임주민 | 프론트엔드 포트폴리오",
    description: "프론트엔드 개발자 임주민의 개인 포트폴리오입니다.🌟",
    images: "/images/projects/portfolio_1.jpg",
  },
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
