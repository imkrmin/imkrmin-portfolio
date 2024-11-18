import React, { Dispatch, SetStateAction } from "react";

type TPagenation = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
};

const Pagenation = ({ page, setPage, totalPages }: TPagenation) => {
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-[#171717] border border-[#737373] text-[#FAFAF9] rounded disabled:bg-[#A3A3A3] disabled:text-[#171717] disabled:cursor-not-allowed"
      >
        이전
      </button>
      <span className="text-center">
        {page} <span className="font-medium"> / {totalPages}</span>
      </span>
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 bg-[#171717] border border-[#737373] text-[#FAFAF9] rounded disabled:bg-[#A3A3A3] disabled:text-[#171717] disabled:cursor-not-allowed"
      >
        다음
      </button>
    </div>
  );
};

export default Pagenation;
