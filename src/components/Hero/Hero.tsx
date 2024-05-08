"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  FaFacebookSquare,
  FaFolderMinus,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
  FaTwitterSquare,
} from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import {
  IoIosInformationCircleOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="block h-full sm:flex w-full mx-auto items-center justify-center mb-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute -bottom-44 -left-72  gap-4 flex flex-col"
      >
        <Link  target="_blank" href="https://www.facebook.com/lumipeople" className="text-lumiblue hover:text-lumiorange">
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaFacebookSquare className="text-3xl" />
          </motion.div>
        </Link>
        <Link  target="_blank" href="https://ar.linkedin.com/company/lumi-people-ar" className="text-lumiblue hover:text-lumiorange">
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaLinkedin className="text-3xl" />
          </motion.div>
        </Link>
        <Link  target="_blank" href="https://www.instagram.com/lumipeople.ar/" className="text-lumiblue hover:text-lumiorange">
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaInstagramSquare className="text-3xl" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Animación izquierda */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-lg mr-8 sm:mr-0 z-30 hidden lg:block"
      >
        <div className="absolute top-10 -left-1/2 md:-left-10 w-56 h-56 bg-lumigray rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob"></div>
        <div className="absolute -top-24 md:-left-40 w-56 h-56 bg-lumiblue rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -top-24 -left-1/3 md:-left-10 w-56 h-56 bg-lumiorange rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-4000"></div>
      </motion.div>

      {/* Contenido principal */}
      <div className="sm:text-left max-w-4xl md:mx-auto flex flex-col mx-10">
        <div className="w-full flex flex-col items-center justify-center ">
          <img
            className="w-full h-full xl:h-96 mx-auto object-cover"
            src="/lumipeople.png"
            alt="Lumi People"
            loading="eager"
          />
          <p className="font-light mb-4 text-xl text-center ">
            En Lumi People, estamos comprometidos a brindar soluciones
            innovadoras y personalizadas para tus necesidades de Recursos
            Humanos. Con un equipo multicultural y 19 años de experiencia,
            ofrecemos atención en tu idioma y resultados que superan tus
            expectativas.
          </p>
        </div>
        <div className="flex gap-2  justify-center items-center sm:justify-center">
          <Link href="/sobrenosotros">
            <Button className="flex gap-2 w-3xl text-lg font-normal bg-lumiorange shadow-xl">
              ¿Quienes somos?{" "}
              <IoMdInformationCircleOutline className="text-lumiblue" />
            </Button>
          </Link>
          <Link href="/vacantes">
            <Button className="flex gap-2 w-3xl text-lg font-normal bg-lumiorange shadow-xl">
              Trabaja con nosotros!{" "}
              <BsPersonWorkspace className="text-lumiblue" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Iconos de redes sociales */}

      {/* Animación derecha */}
      <motion.div
        id="right-animation"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-lg ml-8 sm:mr-0 z-30 hidden lg:block"
      >
        <div className="absolute top-10 md:left-1/2 w-56 h-56 bg-lumigray rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob"></div>
        <div className="absolute -top-24 md:left-60 w-56 h-56 bg-lumiblue rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -top-24 md:left-1/3 w-56 h-56 bg-lumiorange rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-4000"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
