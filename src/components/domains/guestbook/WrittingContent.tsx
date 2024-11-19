"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputField from "./InputField";
import { createGuestbook } from "@/lib/database/action";

const WrittingContent = ({
  reloadGuestbooks,
}: {
  reloadGuestbooks: () => Promise<void>;
}) => {
  const [formData, setFormData] = useState({
    nickname: "",
    password: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "password" && value.length < 4) {
      setErrorMessage("비밀번호는 최소 4글자 이상이어야 합니다.");
    } else if (name === "password") {
      setErrorMessage("");
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password.length < 4) {
      alert("비밀번호는 최소 4글자 이상이어야 합니다.");
      return;
    }

    const id = uuidv4();

    try {
      await createGuestbook({
        id,
        nickname: formData.nickname,
        password: formData.password,
        message: formData.message,
      });
      alert("방명록이 성공적으로 작성되었습니다!");

      setFormData({
        nickname: "",
        password: "",
        message: "",
      });
      reloadGuestbooks();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("방명록 작성 오류:", error.message);
        alert(error.message);
      } else {
        console.error("알 수 없는 오류 발생", error);
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between gap-10 w-full max-w-[800px] bg-[#171717] py-5 px-10 mobile:px-8 mb-10 rounded-[10px]"
    >
      <div className="flex flex-col gap-5 mobile:gap-8">
        <div className="flex mobile:flex-col justify-center w-full gap-20 mobile:gap-5">
          <InputField
            label="이름"
            name="nickname"
            type="text"
            onChange={handleChange}
            value={formData.nickname}
          />
          <InputField
            label="비밀번호"
            name="password"
            type="password"
            onChange={handleChange}
            errorMessage={errorMessage}
            value={formData.password}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="message" className="font-semibold">
            내용
          </label>
          <div className="bg-[#F5F5F4] rounded-[5px] p-2">
            <textarea
              name="message"
              id="message"
              onChange={handleChange}
              value={formData.message}
              className="w-full text-[#262626] bg-[#F5F5F4] font-medium resize-none overflow-hidden h-[100px]"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="self-end w-fit p-2 border border-[#FAFAF9] hover:opacity-80 rounded-[5px] font-semibold disabled:cursor-not-allowed"
        disabled={!!errorMessage || !formData.nickname || !formData.message}
      >
        등록하기
      </button>
    </form>
  );
};

export default WrittingContent;
