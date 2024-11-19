import Image from "next/image";
import { FaLink } from "react-icons/fa6";

const GoToButton = ({ url, github }: { url?: string; github?: string }) => {
  return (
    <div className="flex justify-center items-center gap-5 mt-8">
      {github && (
        <a href={github} target="_blank">
          <button className="flex justify-center items-center gap-2 w-[150px] mobile:w-[120px] p-2 rounded-[5px] bg-[#737373] bg-opacity-80 text-[#FAFAF9] mobile:text-[12px] hover:bg-opacity-20 hover:border hover:border-[#F5F5F5]">
            <Image
              src="/icons/stacks/GitHub.svg"
              alt="깃허브 아이콘"
              width={20}
              height={20}
            />
            깃허브 바로가기
          </button>
        </a>
      )}
      {url && (
        <a href={url} target="_blank">
          <button className="flex justify-center items-center gap-2 w-[150px] mobile:w-[120px] p-2 rounded-[5px] bg-[#737373] bg-opacity-80 text-[#FAFAF9] mobile:text-[12px] hover:bg-opacity-20 hover:border hover:border-[#F5F5F5]">
            <FaLink className="text-[#FAFAF9]" />
            사이트 바로가기
          </button>
        </a>
      )}
    </div>
  );
};

export default GoToButton;
