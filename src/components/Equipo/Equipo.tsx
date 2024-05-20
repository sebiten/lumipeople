"use client";
import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

interface IEquipoProps {}

export default function Equipo() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-8 px-4 mx-auto max-w-7xl lg:py-16 lg:px-6"
      >
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 mt-10 text-3xl tracking-tight font-extrabold border-b ">
            Nuestro Equipo{" "}
            <RiTeamFill className="inline-block text-lumiorange" />
            <hr className="border-b border-lumiorange border-dotted mt-2" />
          </h2>
          <p className="font-light  lg:mb-16 sm:text-xl ">
            Explore the whole collection of open-source web components and
            elements built with the utility classNamees from Tailwind
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
  <div className="items-center rounded-lg shadow sm:flex">
    <a href="#">
      <img
        className="w-full h-96 rounded-lg sm:rounded-none sm:rounded-l-lg"
        src="/MarianoNieva.webp"
        alt="Mariano Avatar"
        loading="lazy"
      />
    </a>
    <div className="p-5">
      <h3 className="text-xl font-bold tracking-tight">
        <p className="text-2xl">Mariano Nieva</p>
      </h3>
      <span className="text-lumiorange text-lg">Jefe de RRHH</span>
      <ul className="flex space-x-4 sm:mt-0">
        <Link className="mt-2" href="https://www.linkedin.com/in/mariano-gast%C3%B3n-nieva-32533442/">
          <FaLinkedin size={24} />
        </Link>
      </ul>
    </div>
  </div>
  <div className="items-center rounded-lg shadow sm:flex">
    <a href="#">
      <img
        className="w-full h-96 rounded-lg sm:rounded-none sm:rounded-l-lg"
        src="/CelesteCastillo.webp"
        alt="Celeste Avatar"
        loading="lazy"
      />
    </a>
    <div className="p-5">
      <h3 className="text-xl font-bold tracking-tight">
      <p className="text-2xl">Celeste Castillo</p>
      </h3>
      <span className="text-lumiorange text-lg">Administración de Personal</span>

      <ul className="flex space-x-4 sm:mt-0">
        <Link className="mt-2" href="https://www.linkedin.com/in/celestecastillorrhh/">
          <FaLinkedin size={24} />
        </Link>
      </ul>
    </div>
  </div>
  <div className="items-center rounded-lg shadow sm:flex">
    <a href="#">
      <img
        className="w-full h-96 rounded-lg sm:rounded-none sm:rounded-l-lg"
        src="/JuanCarlos.webp"
        loading="lazy"
        alt="Juan Carlos Avatar"
      />
    </a>
    <div className="p-5">
      <h3 className="text-xl font-bold tracking-tight">
      <p className="text-2xl">Juan Carlos Monzón</p>
      </h3>
      <span className="text-lumiorange text-lg">Liquidación de Sueldos</span>

      <ul className="flex space-x-4 sm:mt-0">
        <Link className="mt-2" href="https://www.linkedin.com/in/juan-carlos-monz%C3%B3n-14207016b/">
          <FaLinkedin size={24} />
        </Link>
      </ul>
    </div>
  </div>
  <div className="items-center rounded-lg shadow sm:flex">
    <a href="#">
      <img
        className="w-full h-96 rounded-lg sm:rounded-none sm:rounded-l-lg"
        src="/YaelRomano.webp"
        alt="Yael Avatar"
        loading="lazy"
      />
    </a>
    <div className="p-5">
      <h3 className="text-xl font-bold tracking-tight">
      <p className="text-2xl">Yael Romano</p>
      </h3>
      <span className="text-lumiorange text-lg">Administración de Personal</span>

      <ul className="flex space-x-4 sm:mt-0">
        <Link className="mt-2" href="https://www.linkedin.com/in/yaelromanohr/">
          <FaLinkedin size={24} />
        </Link>
      </ul>
    </div>
  </div>
</div>

      </motion.div>
    </section>
  );
}
