import Image from "next/image";
import SlidingText from "./SlidingText";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Header = () => {
  return (
    <section className="flex flex-col bg-header bg-cover">
      {/* <div className="absolute flex justify-center">
        <Image
          src={"/images/profileimg.jpg"}
          alt="프로필 이미지"
          width={300}
          height={400}
        />
      </div> */}
      <SlidingText />
      <div className="flex justify-center mb-2">
        <MdKeyboardDoubleArrowDown className="text-[#e3e3e3] w-12 h-12 animate-bounce" />
      </div>
    </section>
  );
};

export default Header;
