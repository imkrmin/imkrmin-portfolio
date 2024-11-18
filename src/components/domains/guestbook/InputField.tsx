import { ChangeEvent, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const InputField = ({
  label,
  name,
  type = "text",
  onChange,
  errorMessage,
}: {
  label?: "이름" | "비밀번호";
  name: "nickname" | "password";
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errorMessage?: string;
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const inputType =
    name === "password" ? (isPasswordVisible ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <div className="relative">
        <input
          name={name}
          id={name}
          type={inputType}
          className={`w-full bg-[#F5F5F4] rounded-[5px] text-[#262626] font-medium p-2 ${
            errorMessage ? "border border-[#E11D48]" : ""
          }`}
          onChange={onChange}
        />
        {name === "password" && (
          <button
            type="button"
            onClick={handleToggleVisibility}
            className={`absolute right-3 ${
              errorMessage ? "top-[16%]" : "top-1/4"
            } text-sm text-[#525252] hover:text-black`}
          >
            {isPasswordVisible ? (
              <IoEyeOutline className="w-5 h-5" />
            ) : (
              <IoEyeOffOutline className="w-5 h-5" />
            )}
          </button>
        )}
        {errorMessage && (
          <span className="text-[#E11D48] text-[12px]">{errorMessage}</span>
        )}
      </div>
    </div>
  );
};

export default InputField;
