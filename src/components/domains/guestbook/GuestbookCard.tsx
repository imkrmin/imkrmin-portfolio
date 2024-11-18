import { Guestbook } from "@/types/guestbook";
import PasswordConfirmationModal from "@/components/common/modal/PasswordConfirmationModal";
import useOpenToggle from "@/hooks/useOpenToggle";
import { FaTrashAlt } from "react-icons/fa";

const GuestbookCard = ({
  guestbook,
  reloadGuestbooks,
}: {
  guestbook: Guestbook;
  reloadGuestbooks: () => Promise<void>;
}) => {
  const { _id, totalPosts, nickname, message, createdAt } = guestbook;
  const { isOpen, openToggle, setIsOpen } = useOpenToggle();
  const date = new Date(createdAt);
  const formattedDate = date.toISOString().split("T")[0];

  return (
    <div className="flex flex-col w-full max-w-[1000px] h-[200px] bg-[#404040] bg-opacity-80 rounded-[5px]">
      <div className="flex justify-between w-full bg-[#171717] rounded-t-[5px] py-2 px-5">
        <div className="flex items-center gap-5">
          <span className="font-semibold">{`No.${totalPosts}`}</span>
          <span className="font-semibold">{nickname}</span>
        </div>
        <span className="font-semibold">{formattedDate}</span>
      </div>
      <span className="flex flex-1 p-5 text-[#FAFAF9]">{message}</span>
      <button
        type="button"
        className="flex justify-center items-center gap-1 self-end text-[#404040] w-fit py-1 px-2 m-2 border border-[#525252] bg-[#FAFAF9] hover:opacity-80 rounded-[5px]"
        onClick={openToggle}
      >
        <FaTrashAlt />
      </button>
      {isOpen && (
        <PasswordConfirmationModal
          id={_id}
          onClose={() => setIsOpen(false)}
          reloadGuestbooks={reloadGuestbooks}
        />
      )}
    </div>
  );
};

export default GuestbookCard;
