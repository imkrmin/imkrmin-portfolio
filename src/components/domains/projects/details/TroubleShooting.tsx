import { TTroubleShooting } from "@/types/projects";
import Image from "next/image";

const TroubleShooting = ({
  troubleShooting,
}: {
  troubleShooting: TTroubleShooting[];
}) => {
  return (
    <div className="flex flex-col gap-5">
      <span className="flex items-center w-full bg-[#E5E5E5] rounded-[2px] p-1 gap-2 text-center text-[#262626] font-semibold text-[20px] mobile:text-[16px]">
        <Image
          src={"/icons/caution.svg"}
          alt="프로젝트 이름 아이콘"
          width={30}
          height={30}
          className="mobile:w-[20px] mobile:h-[20px]"
        />
        트러블슈팅
      </span>
      <div className="flex flex-col w-full px-5 mobile:px-2 gap-5 mb-5">
        {troubleShooting.map(item => (
          <div key={item.id} className="flex flex-col gap-2">
            <div className="flex gap-2 text-[#262626] text-[16px] mobile:text-[14px]">
              <span className="font-bold mobile:text-[12px] text-nowrap">
                문제 {item.id}.
              </span>
              <span className="mobile:text-[12px]">{item.problem}</span>
            </div>
            <div className="flex gap-2 text-[#262626] ml-5 mobile:ml-2">
              <span className="text-[#A3A3A3] mobile:text-[12px]">ㄴ</span>
              <span className="font-bold text-[#525252] mobile:text-[12px] text-nowrap">
                해결
              </span>
              <span className="mobile:text-[12px]">{item.solving}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TroubleShooting;
