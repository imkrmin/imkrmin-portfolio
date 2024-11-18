import InputField from "@/components/domains/guestbook/InputField";
import ModalContainer from "./ModalContainer";
import { useState } from "react";

type PasswordConfirmationModalProps = {
  onClose: () => void;
  id: string;
};

const PasswordConfirmationModal = ({
  onClose,
  id,
}: PasswordConfirmationModalProps) => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDelete = async () => {
    if (!password) {
      alert("비밀번호를 확인해주세요.");
      return;
    }

    const response = await fetch("/api/guestbook", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, password }),
    });

    if (response.ok) {
      alert("방명록이 성공적으로 삭제되었습니다.");
      onClose();
    } else {
      const data = await response.json();
      alert(data.message || "방명록 삭제를 실패했습니다.");
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
