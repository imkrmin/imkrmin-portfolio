"use client";

import { useState } from "react";
import Image from "next/image";

const FlipImg = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative transition-all duration-500 [transform-style:preserve-3d] ${
        isFlipped ? "[transform:rotateY(180deg)]" : ""
      }`}
    >
      <Image
        src={`/images/${isFlipped ? "profileimg(2)" : "profileimg"}.jpg`}
        alt="프로필 이미지"
        width={400}
        height={400}
        className={`rounded-lg opacity-80 mobile:w-[300px] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        } `}
      />
      <div className="absolute bottom-2 left-2 flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#171717] hover:opacity-80 cursor-pointer">
        <Image
          src={`/icons/arrow-left-right.svg`}
          alt="뒤집기 아이콘"
          width={20}
          height={20}
          onClick={e => {
            e.stopPropagation();
            setIsFlipped(!isFlipped);
          }}
        />
      </div>
    </div>
  );
};

export default FlipImg;
