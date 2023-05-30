import { LuArrowRight } from "react-icons/lu";

import { BANNER_BUTTON_TEXT } from "../Banner.constants";

export function PremiumButton() {
  return (
    <button
      type="button"
      className="flex flex-row items-center justify-between my-2 text-white font-semibold text-md rounded-md px-4 md:mx-4 py-2 bg-indigo-500 hover:bg-gray-800"
    >
      <span className="mr-2">{BANNER_BUTTON_TEXT}</span>
      <LuArrowRight className="p-0 m-0" />
    </button>
  );
}
