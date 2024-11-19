import { OpenGraphType } from "next/dist/lib/metadata/types/opengraph-types";

export const METADATA = {
  title: "임주민 | 프론트엔드 포트폴리오",
  description: "프론트엔드 개발자 임주민의 개인 포트폴리오입니다.🌟",
  imageUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/images/projects/portfolio_1.jpg`,
  url: process.env.LOCAL_URL as string,
  locale: "ko_KR",
  type: "website" as OpenGraphType,
  creator: "임주민",
  generator: "Next.js",
  publisher: "임주민",
  applicationName: "imkrmin",
  keywords: [
    "프론트엔드",
    "프론트엔드 포트폴리오",
    "주니어 프론트엔드",
    "주니어 프론트엔드 포트폴리오",
    "프론트엔드 포트폴리오 사이트",
    "웹 개발",
    "개발자",
  ],
};
