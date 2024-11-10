import { TFilter } from "@/app/projects/page";
import { GiSettingsKnobs } from "react-icons/gi";

type TFilterProps = {
  selectFilter: TFilter;
  onFilterChange: (filter: TFilter) => void;
};

const Filter = ({ selectFilter, onFilterChange }: TFilterProps) => {
  return (
    <div className="flex justify-center items-center gap-2 p-3 w-[350px] bg-[#404040] bg-opacity-80 rounded-full">
      <GiSettingsKnobs className="w-8 h-8 pr-2 font-bold" />
      {["All", "Team", "Solo"].map((item, index) => (
        <button
          key={index}
          type="button"
          className={`w-fit min-w-[80px] p-2 rounded-full text-center font-semibold text-[20px] ${
            selectFilter === (item as TFilter)
              ? "text-[#262626] bg-[#FAFAF9] bg-opacity-80"
              : "hover:bg-[#FAFAF9] hover:bg-opacity-20"
          } cursor-pointer`}
          onClick={() => onFilterChange(item as TFilter)}
        >
          <p>{item}</p>
        </button>
      ))}
    </div>
  );
};

export default Filter;
