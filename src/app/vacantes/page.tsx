"use client";
import About from "@/components/About/About";
import Equipo from "@/components/Equipo/Equipo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VacancyCard } from "@/components/VacantesCard/Vacantes";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SlDocs } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
const vacante = [
  {
    titulo: "Desarrollador Web",
    localidad: "Ciudad de México",
    descripcion:
      "Estamos buscando un desarrollador web con experiencia en React.js y Node.js para unirse a nuestro equipo.",
    salario: "100",
    fecha: "17 Agosto 2024",
  },
  {
    titulo: "Diseñador Gráfico",
    localidad: "Barcelona, España",
    descripcion:
      "Buscamos un diseñador gráfico creativo y apasionado para trabajar en proyectos emocionantes.",
    salario: "100",
    fecha: "17 Diciembre 2024",
  },
  {
    titulo: "Operador Gráfico",
    localidad: "Barcelona, España",
    descripcion:
      "Buscamos un diseñador gráfico creativo y apasionado para trabajar en proyectos emocionantes.",
    salario: "100",
    fecha: "17 Agosto 2024",
  },
  {
    titulo: "Diseñador Gráfico",
    localidad: "Barcelona, España",
    descripcion:
      "Buscamos un diseñador gráfico creativo y apasionado para trabajar en proyectos emocionantes.",
    salario: "100",
    fecha: "30 Enero 2024",
  },
  // Agrega más vacantes aquí...
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen max-w-7xl mx-auto py-8"
    >
      <hr className="w-fit" />
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto flex gap-10 max-w-7xl items-center justify-center w-full text-center mb-4 lg:mb-14">
          <img
            className="w-[600px] h-auto rounded-md"
            loading="lazy"
            width={1280}
            height={720}
            alt="Hiring"
            src={"/cargatucv.webp"}
          />
          <div className="text-start">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold ">
              {" "}
              Vacantes disponibles!
            </h2>

            <p className="my-2 text-lg">
              ¿No encuentras tu puesto ideal? No te preocupes, carga tu CV en
              nuestra base de datos y te contactaremos cuando haya una posición
              abierta que se ajuste a tu perfil.
            </p>
            <Button className="flex gap-2 w-3xl text-lg font-normal bg-lumiorange shadow-xl">
              Carga tu Cv <SlDocs className="text-lumiblue" />
            </Button>
          </div>
        </div>

        <form className="flex my-4">
          <Input
            placeholder="Buscar puesto"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button>Buscar</Button>
        </form>
        <div className="flex flex-col">
          {vacante
            .filter((vacante) =>
              vacante.titulo.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((vacante, index) => (
              <VacancyCard key={index} vacante={vacante} />
            ))}
        </div>
      </div>
      <h2 className="text-2xl text-lumiblue font-bold my-10 text-center">
        Reclutamiento y seleccion de personal
      </h2>
      <div className="flex items-center justify-center">
        <div className="items-center rounded-lg shadow sm:flex">
          <a href="#">
            <img
              className="w-full h-96 rounded-lg sm:rounded-none sm:rounded-l-lg"
              src="/MariaJoseFerryra(recruiter).webp"
              alt="MariaJose"
              loading="lazy"
            />
          </a>
          <div className="p-5">
            <h3 className="text-xl font-bold tracking-tight">
              <p className="text-2xl">Maria Jose Ferreyra Gerik</p>
            </h3>
            <span className="text-lumiorange text-lg">
              Reclutamiento y selección
            </span>
            <ul className="flex space-x-4 sm:mt-0">
              <Link
                className="mt-2"
                href="https://www.linkedin.com/in/mariajosegerik/"
              >
                <FaLinkedin size={24} />
              </Link>
            </ul>
          </div>
          <div className="items-center rounded-lg shadow sm:flex">
            <a href="#">
              <img
                className="w-full h-96 rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="/SofiaOcaña(Recruiter).webp"
                alt="SofiaOcaña"
                loading="lazy"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight">
                <p className="text-2xl">Sofia Ocaña</p>
              </h3>
              <span className="text-lumiorange text-lg">
                Reclutamiento y selección
              </span>
              <ul className="flex space-x-4 sm:mt-0">
                <Link
                  className="mt-2"
                  href="https://www.linkedin.com/in/sofia-oca%C3%B1a-800099b9/"
                >
                  <FaLinkedin size={24} />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
