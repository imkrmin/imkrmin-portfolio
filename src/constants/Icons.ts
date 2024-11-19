import { TContactIcons, THeaderIcons } from "@/types/icons";

export const HEADER_ICONS: THeaderIcons[] = [
  {
    src: "/icons/project.svg",
    alt: "프로젝트 아이콘",
    tooltipText: "프로젝트 보러가기",
    href: "#projects",
    width: 150,
    height: 150,
    isExternal: false,
  },
  {
    src: "/icons/guest-book.svg",
    alt: "방명록 아이콘",
    tooltipText: "방명록 작성하기",
    href: "#guestbook",
    width: 150,
    height: 150,
    isExternal: false,
  },
  {
    src: "/icons/profileicon.svg",
    alt: "프로필 아이콘",
    tooltipText: "안녕하세요. 프론트엔드 개발자 임주민입니다.",
    href: "/",
    width: 350,
    height: 350,
    isExternal: false,
  },
  {
    src: "/icons/contact.svg",
    alt: "연락하기 아이콘",
    tooltipText: "연락하기",
    href: "#contact",
    width: 100,
    height: 50,
    isExternal: false,
  },
  {
    src: "/icons/download.svg",
    alt: "다운로드 아이콘",
    tooltipText: "이력서 다운로드",
    href: "https://drive.google.com/file/d/1XDlU0OQBRro4zOb94eXocv5VtjlA9YfU/view?usp=sharing",
    target: "_blank",
    rel: "noopener noreferrer",
    width: 150,
    height: 150,
    isExternal: true,
  },
];

export const CONTACT_ICONS: TContactIcons[] = [
  {
    name: "GitHub",
    href: "https://github.com/imkrmin",
    src: "/icons/stacks/GitHub.svg",
    alt: "깃허브 아이콘",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/imkrmin/",
    src: "/icons/insta.svg",
    alt: "인스타그램 아이콘",
  },
  {
    name: "Email",
    href: "mailto:zum2n2@gmail.com",
    src: "/icons/google.svg",
    alt: "구글 아이콘",
  },
];
