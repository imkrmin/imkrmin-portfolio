"use client";

import { CONTACT_ICONS } from "@/constants/icons";
import { TContactIcons } from "@/types/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-between items-center w-full h-full"
    >
      <div className="flex flex-col items-center gap-2 mt-10">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          src={"/icons/profileicon(2).svg"}
          alt="프로필 아이콘"
          width={300}
          height={300}
          className="mobile:w-[200px]"
        />
        <h1 className="font-bold text-4xl mobile:text-xl text-[#FAFAF9] mt-10 text-center">
          저의 포트폴리오를 봐주셔서 감사합니다.
        </h1>
        <span className="font-medium">아래를 통해 저에게 연락주세요!</span>
        <div className="flex justify-center items-center gap-5 mt-10">
          {CONTACT_ICONS.map((item: TContactIcons, index) => (
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-center items-center gap-2 bg-[#171717] w-[150px] mobile:w-[100px] h-[180px] mobile:h-[130px] p-5 rounded-[10px] cursor-pointer hover:border hover:border-[#F5F5F5]"
            >
              <Image src={item.src} alt={item.alt} width={80} height={80} />
              <span className="font-semibold text-center">{item.name}</span>
            </motion.a>
          ))}
        </div>
        <a
          href="https://drive.google.com/file/d/1XDlU0OQBRro4zOb94eXocv5VtjlA9YfU/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex justify-center items-center gap-2 w-[150px] p-2 rounded-[5px] bg-[#737373] bg-opacity-80 text-[#FAFAF9] mobile:text-[12px] hover:bg-opacity-20  hover:border hover:border-[#F5F5F5] mt-10">
            <FaCloudDownloadAlt className="w-5 h-5" />
            이력서 다운받기
          </button>
        </a>
      </div>
    </section>
  );
}
