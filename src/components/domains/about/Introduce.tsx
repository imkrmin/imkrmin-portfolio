import FilpImg from "./FlipImg";

const Introduce = () => {
  return (
    <div className="flex mobile:flex-col items-center w-full gap-[50px] mobile:text-center">
      <FilpImg />
      <div className="flex flex-col gap-10 p-10 mobile:p-0 rounded-[10px]">
        <div className="flex flex-col gap-2 font-medium text-lg">
          <h1 className="text-[50px] mobile:text-[27px] font-extrabold mb-3 text-transparent bg-gradient-to-r from-[#FAFAFA] via-[#737373] to-[#EFF6FF] bg-clip-text bg-[length:200%_200%] animate-gradient-move leading-tight">
            Once I bite, I never let go
          </h1>
          <p className="text-xl mobile:text-lg leading-tight tracking-tight">
            안녕하세요. 프론트엔드 개발자
            <span className="font-extrabold text-2xl mobile:text-xl mx-2 text-[#FAFAF9]">
              임주민
            </span>
            입니다.
          </p>
          <hr className="my-2 opacity-20" />
          <div className="text-[16px] mobile:text-[12px] tracking-normal mobile:tracking-tighter mt-4">
            <p>
              저는 한 번 시작한 일은 끝까지 물고 늘어지는 집념으로 완성도를
              추구합니다.
            </p>
            <p>서비스 개발은 혼자의 노력만으로 이루어지지 않기에</p>
            <p>
              전체 프로세스에서 팀원들과의 활발한 소통이 필수적이라고
              생각합니다.
            </p>
            <p>
              다양한 의견을 조율하며 모두가 만족할 수 있는 결과물을 만들어내는
              것을 목표로 합니다.
            </p>
            <p className="mt-3">
              사용자에게 최고의 경험을 제공하기 위해 끊임없이 고민하고 개선점을
              찾으며
            </p>
            <p>이를 실현하기 위해 지속적으로 성장하고자 노력합니다.</p>
            <p className="mt-3">
              배움에 대한 열정과 끈기를 바탕으로 실력을 쌓아가며 저의 가치를
              증명할 준비가 되어 있습니다.
            </p>
          </div>
        </div>
        <span className="mt-4 font-semibold">Update。2024년 11월 19일</span>
      </div>
    </div>
  );
};

export default Introduce;
