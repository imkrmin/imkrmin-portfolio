import { FaTrashAlt } from "react-icons/fa";

const MessageCard = () => {
  return (
    <div className="flex flex-col w-[1000px] h-[200px] bg-[#404040] bg-opacity-80 rounded-[5px]">
      <div className="flex justify-between w-full bg-[#171717] rounded-t-[5px] py-2 px-5">
        <div className="flex items-center gap-5">
          <span className="font-semibold">{"No.1"}</span>
          <span className="font-semibold">{"닉네임"}</span>
        </div>
        <span className="font-semibold">{"2024-11-11"}</span>
      </div>
      <span className="flex flex-1 p-5 text-[#FAFAF9]">
        {
          "정말 잘 만들었어요~정말 잘 만들었어요~정말 잘 만들었어요~정말 잘 만들었어요~정말 잘 만들었어요~정말 잘 만들었어요~정말 잘 만들었어요~정말 잘 만들었어요~정말 잘 만들었어요~정말 잘 만들었어요~"
        }
      </span>
      <button
        type="submit"
        className="flex justify-center items-center gap-1 self-end text-[#404040] w-fit py-1 px-2 m-2 border border-[#525252] bg-[#FAFAF9] hover:opacity-80 rounded-[5px]"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default MessageCard;
