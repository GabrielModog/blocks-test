import React from "react";
import { LuArrowRight } from "react-icons/lu";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  withIcon: React.ReactNode;
  iconSize?: number;
}

export default function Button({
  children,
  withIcon,
  iconSize = 24,
  ...props
}: ButtonProps) {
  return (
    <div
      className="
          rounded-lg 
          max-w-[294px]
          min-w-[230px]
          max-h-[48px]
          h-[40px]
          bg-gradient-to-r
          from-[#A11CF3]
          to-[#D835C5]
          p-[2px]
          "
    >
      <button
        className="flex flex-row items-center justify-between text-white h-full w-full py-1 px-4 duration-150 rounded-lg bg-[#6f6f6f62] active:bg-transparent hover:bg-[#6f6f6fdc] back"
        {...props}
      >
        <span className="text-md font-semibold ">{children}</span>
        {withIcon && (
          <span className="border-l border-gray-300 pl-1 h-6 flex items-center justify-end">
            <LuArrowRight className="p-0 m-0" size={iconSize} />
          </span>
        )}
      </button>
    </div>
  );
}
