"use client";
import About from "@/components/About/About";
import Equipo from "@/components/Equipo/Equipo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VacancyCard } from "@/components/VacantesCard/Vacantes";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlDocs } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
const vacante = [
  {
    titulo: "Operador de Autoelevador",
    localidad: "Salta, Salta Argentina",
    descripcion:
      "Buscamos operador con certificado para operar autoelevadores y licencia E2 Vigente. Con disponibilidad para trabajar en roster.",
    fecha: "07-05-2024",
    url: "https://forms.gle/LWCkjmPSSLx9ZtWa7",
  },
  {
    titulo: "Chofer de camiones",
    localidad: "Salta, Salta Argentina",
    descripcion:
      "Buscamos chofer que realice carga, descarga y transporte de mercancías peligrosas. Con licencia E1 y carnet de INTI.",
    fecha: "09-05-2024",
    url: "https://forms.gle/qH9Q5wDrpSmETfdh7",
  },
  {
    titulo: "Operador de Muestreo",
    localidad: "Salta, Salta Argentina",
    descripcion:
      "Estamos buscando operador con experiencia en minería para recolectar muestras de producción y realizar control de materiales y equipos.",
    fecha: "10-05-2024",
    url: "https://forms.gle/PyfDHN692LpLJ1xJA",
  },
  {
    titulo: "Técnico Superior en Minería",
    localidad: "Salta, Salta Argentina",
    descripcion:
      "Precisamos de un técnico superior en minería con experiencia en manejo de sustancias químicas peligrosas.",
    fecha: "11-05-2024",
    url: "https://forms.gle/7SyVNbPhkzkUC2mW7",
  },
  {
    titulo: "Ayudante de Cocina",
    localidad: "Salta, Salta Argentina",
    descripcion:
      "Buscamos un ayudante de cocina graduado en Gastronomía con carnet de manipulación para asistencia al chef en comidas coreanas.",
    fecha: "30-04-2024",
    url: "https://forms.gle/VgvZrcpxb5AD4rKr5",
  },
  {
    titulo: "Controlador de Materia Prima",
    localidad: "Salta, Salta Argentina",
    descripcion:
      "Estamos buscando un operador que realice conexiones de cañería para ingreso de fosfato de litio y registre ingresos y egresos de la Materia Prima.",
    fecha: "14-05-2024",
    url: "https://forms.gle/qxLijoxZuzapoX926",
  },
  {
    titulo: "Ingeniero Civil/Industrial o Arquitecto",
    localidad: "Salta, Salta Argentina",
    descripcion:
      "Buscamos un profesional con experiencia en minería o construcción para análisis técnico y revisión de planos.",
    fecha: "20-05-2024",
    url: "https://forms.gle/fj94LjmbUj9824XN7",
  },
  {
    titulo: "Analista de Higiene y Seguridad",
    localidad: "Salta, Salta Argentina",
    descripcion:
      "Buscamos un analista con experiencia en aplicación de las normativas vigentes para supervisión de obra en campo y capacitación de personal.",
    fecha: "17-05-2024",
    url: "https://forms.gle/rLoc3Tkiqv3VGV7y9",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
      className="min-h-screen max-w-7xl mx-auto py-8"
    >
      <hr className="w-fit" />
      <div className="max-w-7xl mx-auto p-2">
        <div className="mx-auto block lg:flex gap-10 max-w-7xl items-center justify-center w-full text-center mb-4 lg:mb-14">
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
            <Button className="bg-lumiorange shadow-xl">
              <Link
                target="_blank"
                className="flex items-center gap-2 w-3xl text-lg font-normal"
                href="https://forms.gle/LWCkjmPSSLx9ZtWa7"
              >
                Carga tu Cv <SlDocs className="text-lumiblue" />
              </Link>
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
