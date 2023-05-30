import { LuX } from "react-icons/lu";

import { BANNER_BUTTON_CLOSE_TEXT } from "../Banner.constants";
import { BannerProps } from "../Banner.types";

export function CloseButton({ handleToggle }: Omit<BannerProps, "isShowing">) {
  return (
    <button
      type="button"
      onClick={handleToggle}
      className="cursor-pointer flex flex-row items-center justify-between p-4 md:hidden"
    >
      <span className="text-sm font-semibold mr-1">
        {BANNER_BUTTON_CLOSE_TEXT}
      </span>
      <LuX className="p-0 m-0" size={16} />
    </button>
  );
}
