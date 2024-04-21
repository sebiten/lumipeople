import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { ModeToggle } from "../mode-toggle";

export const links = [
  { href: "/", text: "Inicio", target: "_parent" },
  {
    href: "/noticias",
    text: "Noticias ",
    target: "_self",
  },
  {
    href: "/sobrenosotros",
    text: "Sobre nosotros",
  },
  {
    href: "https://www.instagram.com/abelardo.blog/",
    icon: <FaInstagram size={22} />,
    target: "_blank",
  },
  {
    href: "https://www.youtube.com/channel/UCe1X6rUXwKIsy9dSrP34euw",
    icon: <FaLinkedin size={22} />,
    target: "_blank",
  },
];
export default function Navbar() {
  return (
    <nav className=" p-2 sticky w-full top-0 drop-shadow-xl z-10">
      <div className="max-w-6xl mx-auto flex justify-between  ">
        <div className="text-xl font-bold  grid place-content-center">
          <Link
            target="_parent"
            href="/"
            className="text-center font-title  font-bold uppercase no-underline"
          >
            <img className="w-28 h-28 mx-auto" src="/lumipeople.png" />
          </Link>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <ModeToggle />
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-lumiorange"
              target={link.target || ""}
            >
              {link.icon ? link.icon : link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
