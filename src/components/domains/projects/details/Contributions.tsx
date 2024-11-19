import { TFeatureOrContribution } from "@/types/projects";
import Image from "next/image";
import React from "react";

const Contributions = ({
  contributions,
}: {
  contributions: TFeatureOrContribution[];
}) => {
  return (
    <div className="flex flex-col gap-5">
      <span className="flex items-center w-full bg-[#E5E5E5] rounded-[2px] p-1 gap-2 text-center text-[#262626] font-semibold text-[20px]  mobile:text-[16px]">
        <Image
          src={"/icons/profile.svg"}
          alt="프로젝트 이름 아이콘"
          width={30}
          height={30}
          className="mobile:w-[20px] mobile:h-[20px]"
        />
        작업 기여도
      </span>
      <ul className="flex flex-col w-full px-5 mobile:px-2 gap-2 text-[#262626] mobile:text-[12px] list-inside list-disc marker:text-[#A3A3A3]">
        {contributions.map(feature => (
          <li key={feature.id}>{feature.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contributions;
