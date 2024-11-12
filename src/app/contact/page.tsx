"use client";

import { CONTACT_ICONS } from "@/constants/Icons";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-between items-center w-full h-full"
    >
      <div className="flex flex-col items-center gap-2 m-10">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          src={"/icons/profileicon(2).svg"}
          alt="프로필 아이콘"
          width={300}
          height={300}
        />
        <h1 className="font-bold text-4xl text-[#FAFAF9] mt-10">
          저의 포트폴리오를 봐주셔서 감사합니다.
        </h1>
        <span className="font-medium">아래를 통해 저에게 연락주세요!</span>
        <div className="flex justify-center items-center gap-5 mt-10">
          {CONTACT_ICONS.map((item, index) => (
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-center items-center gap-2 bg-[#171717] w-[150px] h-[180px] p-5 rounded-[10px] cursor-pointer hover:border hover:border-[#F5F5F5]"
            >
              <Image src={item.src} alt={item.alt} width={80} height={80} />
              <span className="font-semibold text-center">{item.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
