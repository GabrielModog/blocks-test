import Link from "next/link";
import { Banner, useBanner } from "../Banner";

export default function Header() {
  const [hidden, setHidden] = useBanner();
  return (
    <>
      <Banner isShowing={hidden} handleToggle={setHidden} />
      <header className="container-md h-[80px] flex flex-col items-center justify-between">
        <div className="flex items-center justify-center flex-grow">
          <Link href="/">
            <img
              src="/logo.png"
              alt="blocks"
              className="w-[91px] md:w-[146px]"
            />
          </Link>
        </div>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#A11CF3] to-[#D835C5]" />
      </header>
    </>
  );
}
