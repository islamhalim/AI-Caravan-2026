import React from "react";

interface SectionDividerProps {
  title: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center my-12">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="px-4 text-xl sm:text-2xl font-semibold text-gray-700">
        {title}
      </span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default SectionDivider;