import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

interface IFooterProps {}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="https://flowbite.com/" className="flex items-center">
              <img
                src="/lumipeople.png"
                className="h-28 w-28 me-3"
                alt="FlowBite Logo"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase ">
                Recursos
              </h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <Link href="" className="hover:underline">
                    Lumi People
                  </Link>
                </li>
                <li>
                  <Link href="/vacantes" className="hover:underline">
                    Trabaja con nosotros
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase ">
                Siguenos en nuestras redes!
              </h2>
              <ul className="  font-medium">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/lumi-people-ar"
                    className="hover:underline flex gap-1 items-center "
                  >
                    Linkedin <FaLinkedin/>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/lumipeople.ar/"
                    className="hover:underline flex gap-1 items-center "
                  >
                    Instagram <FaInstagram/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {year} {""}
            <a href="https://lumipeoplear.com/" className="hover:underline">
              LumiPeople
            </a>
            .
          </span>
        </div>
      </div>
    </footer>
  );
}
