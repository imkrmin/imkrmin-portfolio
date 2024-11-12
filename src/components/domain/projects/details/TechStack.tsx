import { TTroubleShooting } from "@/types/Projects";
import Image from "next/image";

const TechStack = ({ techStacks }: { techStacks: string[] }) => {
  return (
    <div className="flex flex-col gap-5">
      <span className="flex flex-wrap items-center w-full bg-[#E5E5E5] rounded-[2px] p-1 gap-2 text-center text-[#262626] font-semibold text-[20px]">
        <Image
          src={"/icons/moniter.svg"}
          alt="프로젝트 이름 아이콘"
          width={30}
          height={30}
        />
        기술스택
      </span>
      <div className="flex items-center w-full px-5 gap-5">
        {techStacks.map((skill, index) => (
          <span
            key={index}
            className="w-fit px-2 py-1 bg-[#A3A3A3] rounded-[10px] font-medium text-[#FAFAF9] border border-[#E5E5E5] whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
