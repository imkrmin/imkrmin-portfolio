import React from "react";

const Tag = ({ label }: { label: string }) => {
  return (
    <span className="bg-[#E5E5E5] bg-opacity-80 w-fit p-1 rounded-[5px] text-[10px] text-center text-[#737373] font-bold">
      {label}
    </span>
  );
};

export default Tag;
