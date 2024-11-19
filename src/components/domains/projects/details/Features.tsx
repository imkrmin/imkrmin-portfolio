import { TFeatureOrContribution } from "@/types/projects";
import Image from "next/image";

const Features = ({ features }: { features: TFeatureOrContribution[] }) => {
  return (
    <div className="flex flex-col gap-5">
      <span className="flex items-center w-full bg-[#E5E5E5] rounded-[2px] p-1 gap-2 text-center text-[#262626] font-semibold text-[20px] mobile:text-[16px]">
        <Image
          src={"/icons/approval.svg"}
          alt="프로젝트 이름 아이콘"
          width={30}
          height={30}
          className="mobile:w-[20px] mobile:h-[20px]"
        />
        주요 기능 및 특징
      </span>
      <ul className="flex flex-col w-full px-5 mobile:px-2 gap-2 text-[#262626] mobile:text-[12px] list-inside list-disc marker:text-[#A3A3A3]">
        {features.map(feature => (
          <li key={feature.id}>{feature.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
