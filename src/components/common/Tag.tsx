const Tag = ({
  label,
  variantClassess,
}: {
  label: string;
  variantClassess: string;
}) => {
  return (
    <span
      className={`bg-[#E5E5E5] bg-opacity-80 w-fit p-1 rounded-[5px] ${variantClassess} text-center text-[#525252] font-semibold`}
    >
      {label}
    </span>
  );
};

export default Tag;
