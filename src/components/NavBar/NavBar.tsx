import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { ModeToggle } from "../mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";

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
    href: "/vacantes",
    text: "¡Únete al equipo!",
  },
];
export default function Navbar() {
  return (
    <nav className="bg-inherit max-w-full mx-auto p-2 sticky top-0 z-50 ">
      <div className="max-w-7xl flex flex-wrap justify-between items-center md:flex-nowrap mx-auto">
        <div className="">
          <Link
            target="_parent"
            href="/"
            className="text-xl font-bold text-center font-title uppercase no-underline text-inherit md:pl-0"
          >
            <img
              className="w-28 h-28 mx-auto"
              src="/lumipeople.png"
              alt="Logo"
              loading="lazy"

            />
          </Link>
        </div>
        <div className="flex items-center justify-end md:order-1 gap-2">
          <ModeToggle />

          <ul className="hidden md:flex flex-row gap-4 list-none pl-4">
            {links.map((link, index) => (
              <li key={index} className="text-lg hover:text-lumiorange">
                <Link href={link.href} target={link.target || ""}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between md:hidden gap-2">
            {/* Dropdown Menu for mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <GiHamburgerMenu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {links.map((link, index) => (
                  <Link key={index} href={link.href} target={link.target || ""}>
                    <DropdownMenuLabel className="text-lg hover:text-lumiorange py-2 px-4">
                      {link.text}
                    </DropdownMenuLabel>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex gap-2 ">
            <Link  target="_blank" href="https://www.instagram.com/lumipeople.ar/" className="hover:text-lumiorange">
              <FaInstagram size={22} />
            </Link>
            <Link target="_blank" href="https://ar.linkedin.com/company/lumi-people-ar" className="hover:text-lumiorange">
              <FaLinkedin size={22} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
