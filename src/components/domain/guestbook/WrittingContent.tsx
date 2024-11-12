const InputField = ({
  label,
  name,
  type = "text",
}: {
  label: "이름" | "비밀번호";
  name: "nickname" | "password";
  type?: string;
}) => (
  <div className="flex flex-col gap-2 w-full">
    <label htmlFor={name} className="font-semibold">
      {label}
    </label>
    <input
      name={name}
      id={name}
      type={type}
      className="w-full bg-[#F5F5F4] rounded-[5px] text-[#262626] font-medium p-2"
    />
  </div>
);

const WrittingContent = () => {
  return (
    <form
      action=""
      method="post"
      className="flex flex-col justify-between gap-10 w-full max-w-[1000px] bg-[#171717] py-5 px-10 mb-10 rounded-[10px]"
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center w-full gap-20">
          <InputField label="이름" name="nickname" />
          <InputField label="비밀번호" name="password" type="password" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="message" className="font-semibold">
            내용
          </label>
          <div className="bg-[#F5F5F4] rounded-[5px] p-2">
            <textarea
              name="message"
              id="message"
              className="w-full text-[#262626] bg-[#F5F5F4] font-medium resize-none overflow-hidden h-[100px]"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="self-end w-fit py-1 px-2 border border-[#FAFAF9] hover:opacity-80 rounded-[5px] font-semibold"
      >
        등록하기
      </button>
    </form>
  );
};

export default WrittingContent;
