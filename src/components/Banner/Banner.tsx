import type { BannerProps } from "./Banner.types";

export function Banner({ isShowing = true, handleToggle }: BannerProps) {
  return (
    <>
      {isShowing && (
        <div className="flex flex-col md:flex-row items-center justify-center bg-zinc-900 text-white md:h-[67px] lg:h-full">
          {handleToggle && (
            <button
              type="button"
              onClick={handleToggle}
              className="p-4 md:hidden"
            >
              Fechar
            </button>
          )}
          <p className="p-1 text-center text-xl md:text-sm">
            Não limite sua criatividade, junte-se a familia Blocks por apenas{" "}
            <b>BRL 19,99</b>
          </p>
          <p>Quero Premium</p>
        </div>
      )}
    </>
  );
}
