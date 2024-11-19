import Header from "@/components/domains/main/Header";
import Menu from "@/components/common/Menu";
import AboutPage from "./about/page";
import GuestBookPage from "./guestbook/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-[#232323] flex tablet:flex-col px-8 mobile:px-5 py-20 mobile:py-5 tablet:py-8 z-10">
        <Menu />
        <div className="flex flex-col w-full h-full pl-10 tablet:pl-0 tablet:pt-10">
          <AboutPage />
          <ProjectsPage />
          <GuestBookPage />
        </div>
      </div>
      <div
        className="bg-dot-pattern bg-repeat z-10 bg-fixed bg-[length:16px_16px]"
        style={{ backgroundColor: "#282828" }}
      >
        <ContactPage />
        <Footer />
      </div>
    </>
  );
}
