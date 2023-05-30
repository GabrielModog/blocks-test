import { useState } from "react";

export default function Banner() {
  const [isShowing, setShowing] = useState<boolean>(true);
  const toggle = () => setShowing((prev) => !prev);
  return (
    <>
      {isShowing && (
        <div className="flex flex-col md:flex-row items-center justify-center bg-zinc-900 text-white md:h-[67px] lg:h-full">
          <button type="button" onClick={toggle} className="p-4 md:hidden">
            Fechar
          </button>
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
