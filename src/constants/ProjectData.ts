import { TProjectData } from "@/types/Projects";

export const ProjectData: TProjectData[] = [
  {
    images: ["portfolio_1", "portfolio_2", "portfolio_3", "portfolio_4"],
    name: "포트폴리오 웹 사이트",
    category: "Single",
    term: "2024-10-28 ~ 현재",
    description:
      "기획부터 디자인까지 직접 작업한 개인 포트폴리오 웹사이트입니다. <br /> 사용자 경험을 최우선으로 고려하여 인터랙티브한 기능들을 구현하였습니다.",
    techStacks: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tailwind.css",
      "MongoDB",
      "Vercel",
    ],
    url: "",
    github: "https://github.com/imkrmin/imkrmin-portfolio",
    features: [
      { id: 1, text: "피드백을 반영하여 지속적으로 개선 중" },
      {
        id: 2,
        text: "사용자 경험을 최우선으로 고려하여 메뉴 클릭 시 스크롤이 부드럽게 이동하는 인터랙티브한 기능",
      },
      {
        id: 3,
        text: "각 프로젝트를 클릭하면 세부 내용을 확인할 수 있는 모달 창이 나타나도록 구현하여 보다 직관적으로 정보 탐색 가능",
      },
      {
        id: 4,
        text: "익명으로 닉네임을 설정하여 방명록을 남기고 작성한 글을 삭제할 수 있는 기능",
      },
      {
        id: 5,
        text: "이메일, 제목, 본문을 입력하면 간편하게 이메일을 보낼 수 있는 기능",
      },
      {
        id: 6,
        text: "다양한 디바이스와 화면 크기에 맞춰 자동으로 레이아웃과 스타일이 조정되도록 설계된 웹 디자인",
      },
    ],
    troubleShooting: [
      {
        id: 1,
        problem: "몰라 ㅅㅂ",
        solving: "챗지피티 최고 ;",
      },
    ],
  },
  {
    images: ["calog_1", "calog_2", "calog_3", "calog_4"],
    name: "캘로그",
    category: "Team",
    term: "2024-07 ~ 현재",
    description:
      "구글 캘린더와 쓰레드를 모티브로 만든 캘린더 기반 커뮤니티 플랫폼 API 사이드 프로젝트입니다.",
    techStacks: [
      "Next.js",
      "TypeScript",
      "Next-Auth",
      "Zustand",
      "Tailwind.css",
      "Shadcn",
      "Figma",
      "Postman",
    ],
    url: "",
    github: "https://github.com/calog-project/calog-ui",
    features: [
      { id: 1, text: "캘린더에 일정을 생성 및 일정 공유 기능" },
      {
        id: 2,
        text: "쓰레드 형식의 게시글",
      },
      {
        id: 3,
        text: "채팅 기능",
      },
    ],
    troubleShooting: [
      {
        id: 1,
        problem:
          "기존 캘린더 ui 컴포넌트를 사용해서 쓰기엔 해당 프로젝트가 추구하는 디자인과 기능을 적용시키는 데 어려움이 있음",
        solving: "훅을 만들어서 캘린더를 구현함",
      },
      {
        id: 2,
        problem: "날씨 api",
        solving: "어캐 잘함;",
      },
    ],
  },
  {
    images: ["sturing_1", "sturing_2", "sturing_3", "sturing_4"],
    name: "Sturing",
    category: "Team",
    term: "2024-06-17 ~ 2024-08-02",
    description:
      "사람과 스터디, 강의가 한 고리로 연결되는 Sturing은 동기부여 및 성취감을 주어 지속적인 스터디 참여와 팀원들의 적극적인 참여를 지원하는 스터디 서비스입니다.<br /> 개인화된 콘텐츠와 스터디 상호작용을 통한 관리를 지원하고,<br /> 강의를 매개로 연결되어 더 깊은 성장 시너지를 형성합니다.",
    techStacks: [
      "Next.js",
      "TypeScript",
      "Next-Auth",
      "Zustand",
      "Tailwind.css",
      "MongoDB",
      "Figma",
    ],
    url: "https://sturing.vercel.app/",
    github: "https://github.com/imkrmin/sturing",
    features: [
      {
        id: 1,
        text: "강의에 해당하는 스터디를 모집하여 각 구성원의 능력 및 성향에 맞는 역할 분담 가능",
      },
      {
        id: 2,
        text: "매칭 시스템을 통해 다양한 맞춤형 큐레이션을 제공",
      },
    ],
    contributions: [
      {
        id: 1,
        text: "홈, 매칭, 지원하기, 지원서 상세, 강의 후기 작성/리스트, 게시글 작성/상세, 관심 목록, 404, 서비스 준비 중 페이지 및 사이드바 퍼블리싱",
      },
      {
        id: 2,
        text: "로그아웃, 스터디 생성/지원/지원 취소/삭제, 지원서 상세조회, 강의 후기 작성/조회, 게시글 작성/삭제/조회, 게시글 댓글 작성/삭제/조회, 관심목록 조회 기능 구현",
      },
      {
        id: 3,
        text: "강의 리스트 상세조회, 강의 후기 작성, 강의 북마크 API 구현",
      },
    ],
    troubleShooting: [
      {
        id: 1,
        problem:
          "프로젝트 진행 중 필요한 백엔드 서버 및 API 미제공으로 인해 백엔드 파트에서 높은 러닝 커브 발생",
        solving:
          "팀원 중 API 구현에 능숙한 멤버가 API 구현 비중을 높이고, API 명세서를 작성하여 이후 기능 구현에 대한 진행 상황을 공유함으로써 문제를 해결",
      },
      {
        id: 2,
        problem:
          "스터디 모집 및 지원 페이지에서 사용자 편의를 위해 임시저장 기능이 필요",
        solving:
          "임시저장 버튼을 클릭하면 입력 된 데이터를 로컬 스토리지에 저장하고, 페이지 재진입 시 저장된 데이터를 불러와 사용자가 이전 작업을 이어 서 할 수 있도록 지원.",
      },
    ],
  },
  {
    images: ["gildongmu_1", "gildongmu_2", "gildongmu_3", "gildongmu_4"],
    name: "길동무",
    category: "Team",
    term: "2024-06-17 ~ 2024-08-02",
    description:
      "혼자서 가는 여행은 심심하신가요? 비싼 비용을 분담하고 싶으신가요? <br/> 혼자 여행하기 부담스러우신 분들, 이런저런 여행 친구들 만나보고 싶으신 분들<br/> 그리고 여행에 관한 정보를 공유하고 싶으신 분들을 위한 사이트.<br/> ‘길동무’ 에서 여행 친구도 구하고 여러가지 정보를 공유해보아요!",
    techStacks: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Axios",
      "React-hook-form",
      "Tailwind.css",
    ],
    url: "http://34.228.244.93:3000/",
    github: "https://github.com/imkrmin/gildongmu",
    features: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
    ],
    contributions: [
      {
        id: 1,
        text: "홈, 매칭, 지원하기, 지원서 상세, 강의 후기 작성/리스트, 게시글 작성/상세, 관심 목록, 404, 서비스 준비 중 페이지 및 사이드바 퍼블리싱",
      },
      {
        id: 2,
        text: "로그아웃, 스터디 생성/지원/지원 취소/삭제, 지원서 상세조회, 강의 후기 작성/조회, 게시글 작성/삭제/조회, 게시글 댓글 작성/삭제/조회, 관심목록 조회 기능 구현",
      },
      {
        id: 3,
        text: "강의 리스트 상세조회, 강의 후기 작성, 강의 북마크 API 구현",
      },
    ],
    troubleShooting: [
      {
        id: 1,
        problem: "구글 api",
        solving: "어캐 잘함;",
      },
    ],
  },
  {
    images: ["taskify_1", "taskify_2", "taskify_3", "taskify_4"],
    name: "Taskify",
    category: "Team",
    term: "2024-01-25 ~ 2024-02-08",
    description:
      "Taskify는 일정을 효율적으로 관리하고, 다른 사용자들과 일정을 공유할 수 있는 웹 플랫폼입니다.",
    techStacks: [
      "Next.js",
      "TypeScript",
      "Axios",
      "React-hook-form",
      "Tailwind.css",
      "Shadcn",
      "Vercel",
    ],
    url: "https://sturing.vercel.app/",
    github: "https://github.com/codeit-part3-team7/Taskify",
    features: [
      {
        id: 1,
        text: "[회원가입] 버튼을 클릭하여 가입한 후 로그인하면 서비스를 이용 가능",
      },
      {
        id: 2,
        text: "대시보드를 생성하고, 다른 사용자들에게 공유하여 일정을 관리할 수 있는 기능 구현",
      },
      {
        id: 3,
        text: "[회원가입] 버튼을 클릭하여 가입한 후 로그인하면 서비스를 이용할 수 있습니다.",
      },
    ],
    contributions: [
      {
        id: 1,
        text: "홈, mydashboard 페이지 퍼블리싱 및 기능 구현",
      },
      {
        id: 2,
        text: "컴포넌트 step별 분리 및 정리",
      },
    ],
  },
  {
    images: ["rolling_1", "rolling_2", "rolling_3", "rolling_4"],
    name: "Rolling",
    category: "Team",
    term: "2022-12-09 ~ 2023-12-22",
    description:
      "추억의 롤링 페이퍼를 웹 상에서도 즐길 수 있는 웹 플랫폼입니다.",
    techStacks: [
      "Next.js",
      "TypeScript",
      "Next-Auth",
      "Zustand",
      "Tailwind.css",
      "MongoDB",
      "Figma",
      "Vercel",
    ],
    url: "https://sturing.vercel.app/",
    github: "https://github.com/imkrmin/sturing",
    features: [
      {
        id: 1,
        text: "[롤링 페이퍼 만들기] 버튼을 눌러 롤링 페이퍼 생성",
      },
      {
        id: 2,
        text: "롤링 페이퍼에 메세지를 직접 작성하거나 삭제 가능",
      },
    ],
    contributions: [
      {
        id: 1,
        text: "홈, PostMessage 페이지 퍼블리싱 및 기능 구현",
      },
      {
        id: 2,
        text: "원하는 프로필 이미지 추가 기능 구현",
      },
      {
        id: 3,
        text: "React-Quill을 사용하여 텍스트 작성 및 스타일 입히기 기능 추가",
      },
    ],
  },
];
