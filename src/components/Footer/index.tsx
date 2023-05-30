import { FOOTER_LINKS } from "@/utils/constants";

export default function Footer() {
  return (
    <footer>
      <nav className="flex flex-col items-start md:items-center justify-center p-4 bg-gray-100">
        <ul className="flex flex-col md:flex-row text-gray-950 font-normal text-md md:text-sm">
          {FOOTER_LINKS.map((link) => (
            <li key={link.text} className="sm:mx-1 my-2 md:my-0 md:mx-4">
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
