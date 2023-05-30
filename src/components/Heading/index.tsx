import React from "react";

export interface HeadingProps {
  children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return (
    <h1 className="text-3xl font-bold text-black relative">
      {children}
      <span className="w-[34px] h-[3px] absolute top-9 left-0 rounded-lg bg-gradient-to-r from-[#A11CF3] to-[#D835C5]" />
    </h1>
  );
}
