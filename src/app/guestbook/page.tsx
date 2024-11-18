"use client";

import { PROJECT_VARIANTS } from "@/constants/Animate";
import { motion } from "framer-motion";
import WrittingContent from "@/components/domains/guestbook/WrittingContent";
import { useEffect, useRef, useState } from "react";
import GuestbookCard from "@/components/domains/guestbook/GuestbookCard";
import Pagenation from "@/components/domains/guestbook/Pagenation";

export type Guestbook = {
  id: string;
  nickname: string;
  message: string;
  createdAt: string;
};

export default function GuestBookPage() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [guestbooks, setGuestbooks] = useState<Guestbook[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 4;

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await fetch(
          `/api/guestbook?page=${page}&pageSize=${pageSize}`,
          { method: "GET" }
        );
        if (response.ok) {
          const data = await response.json();
          setGuestbooks(data.guestbooks);
          setTotalPages(data.totalPages);
        } else {
          console.error("방명록을 가져오는 데 실패했습니다.");
        }
      } catch (error) {
        console.error("방명록을 가져오는 중 에러 발생:", error);
      }
    }

    fetchMessages();
  }, [page]);

  return (
    <motion.section
      ref={ref}
      variants={PROJECT_VARIANTS}
      initial="initial"
      animate={isVisible ? "animate" : "initial"}
      id="guestbook"
      className="flex flex-col items-center w-full h-full gap-10"
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold text-4xl">Write a guestbook</h1>
        <span className="font-medium">
          작성된 방명록은 비밀번호를 입력 시 삭제할 수 있습니다.
        </span>
      </div>
      <WrittingContent />
      <div className="flex flex-col items-center gap-10 w-full min-h-[920px]">
        {guestbooks.map(guestbook => (
          <GuestbookCard key={guestbook.id} guestbook={guestbook} />
        ))}
      </div>
      <Pagenation page={page} setPage={setPage} totalPages={totalPages} />
    </motion.section>
  );
}
