import { useState } from "react";
import InputField from "@/components/domains/guestbook/InputField";
import ModalContainer from "./ModalContainer";
import { deleteGuestbook } from "@/lib/database/action";

const PasswordConfirmationModal = ({
  onClose,
  id,
  reloadGuestbooks,
}: {
  onClose: () => void;
  id: string;
  reloadGuestbooks: () => Promise<void>;
}) => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDelete = async () => {
    if (!password) {
      alert("비밀번호를 확인해주세요.");
      return;
    }

    try {
      const message = await deleteGuestbook(id, password);
      alert(message);
      onClose();
      reloadGuestbooks();
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "password") {
      setPassword(value);
      if (value.length < 4) {
        setErrorMessage("비밀번호는 최소 4글자 이상이어야 합니다.");
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <ModalContainer
      onClose={onClose}
      variantClasses="w-[350px] h-[300px] m-auto"
      isCloseClickOutside
    >
      <article className="relative flex flex-col justify-center items-center w-[350px] h-[300px] gap-10 px-10">
        <div className="flex flex-col justify-center items-center">
          <span className="font-semibold text-[20px] text-[#FAFAF9]">
            방명록을 삭제하시겠습니까?
          </span>
          <span>비밀번호를 입력해주세요.</span>
        </div>
        <InputField
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          errorMessage={errorMessage}
        />
        <div className="flex justify-center items-center gap-10 w-full">
          <button
            type="button"
            onClick={onClose}
            className="w-full p-2 border border-[#FAFAF9] text-[#FAFAF9] hover:opacity-80 rounded-[5px] font-semibold"
          >
            취소
          </button>
          <button
            type="submit"
            onClick={handleDelete}
            className="w-full p-2 bg-[#FAFAF9] text-[#232323] hover:opacity-80 rounded-[5px] font-semibold"
          >
            확인
          </button>
        </div>
      </article>
    </ModalContainer>
  );
};

export default PasswordConfirmationModal;
