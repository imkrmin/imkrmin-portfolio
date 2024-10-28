import Header from "@/components/Header";
import AboutPage from "./about/page";
import GuestBookPage from "./guest-book/page";
import ProjectPage from "./project/page";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex p-10">
        <Menu />
        <div className="flex flex-col">
          <AboutPage />
          <ProjectPage />
          <GuestBookPage />
        </div>
      </div>
    </>
  );
}
