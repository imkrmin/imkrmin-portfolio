"use client";

import { SIDE_VARIANTS } from "@/constants/animate";
import { motion } from "framer-motion";
import WrittingContent from "@/components/domains/guestbook/WrittingContent";
import { useEffect, useRef, useState } from "react";
import GuestbookCard from "@/components/domains/guestbook/GuestbookCard";
import Pagenation from "@/components/domains/guestbook/Pagenation";
import { Guestbook } from "@/types/guestbook";
import { fetchGuestbooks } from "@/lib/database/action";

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

  const loadGuestbooks = async () => {
    const data = await fetchGuestbooks(page, pageSize);
    if (data) {
      setGuestbooks(data.guestbooks);
      setTotalPages(data.totalPages);
    }
  };

  useEffect(() => {
    loadGuestbooks();
  }, [page]);

  return (
    <motion.section
      ref={ref}
      variants={SIDE_VARIANTS}
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
      <WrittingContent reloadGuestbooks={loadGuestbooks} />
      <div className="flex flex-col items-center gap-10 w-full min-h-[920px]">
        {guestbooks.map(guestbook => (
          <GuestbookCard
            key={guestbook.id}
            guestbook={guestbook}
            reloadGuestbooks={loadGuestbooks}
          />
        ))}
      </div>
      <Pagenation page={page} setPage={setPage} totalPages={totalPages} />
    </motion.section>
  );
}
