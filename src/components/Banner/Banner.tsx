import { BANNER_BUTTON_CLOSE_TEXT } from "./Banner.constants";
import type { BannerProps } from "./Banner.types";
import { CloseButton } from "./components/CloseButton";
import { PremiumButton } from "./components/PremiumButton";

export function Banner({ isShowing = true, handleToggle }: BannerProps) {
  return (
    <>
      {isShowing && (
        <div className="flex flex-col md:flex-row items-center justify-center bg-zinc-900 text-white py-4 md:h-[67px] lg:h-full">
          <CloseButton handleToggle={handleToggle} />
          <p className="p-1 text-center text-xl md:text-sm">
            Não limite sua criatividade, junte-se a familia Blocks por apenas{" "}
            <b>BRL 19,99</b>
          </p>
          <PremiumButton />
        </div>
      )}
    </>
  );
}
