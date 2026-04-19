"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="block h-full py-16 sm:flex w-full mx-auto items-center justify-center mb-20 relative ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute -bottom-44 -left-72 gap-4 hidden lg:flex flex-col"
      >
        <Link
          target="_blank"
          href="https://www.facebook.com/lumipeople"
          className="text-lumiblue hover:text-lumiorange"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaFacebookSquare className="text-3xl" />
          </motion.div>
        </Link>
        <Link
          target="_blank"
          href="https://ar.linkedin.com/company/lumi-people-ar"
          className="text-lumiblue hover:text-lumiorange"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaLinkedin className="text-3xl" />
          </motion.div>
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/lumipeople.ar/"
          className="text-lumiblue hover:text-lumiorange"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaInstagramSquare className="text-3xl" />
          </motion.div>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-lg mr-8 sm:mr-0 z-30 hidden lg:block"
      >
        <div className="absolute top-10 -left-1/2 md:-left-10 w-56 h-56 bg-lumigray rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob" />
        <div className="absolute -top-24 md:-left-40 w-56 h-56 bg-lumiblue rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -top-24 -left-1/3 md:-left-10 w-56 h-56 bg-lumiorange rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-4000" />
      </motion.div>

      <div className="sm:text-left max-w-4xl md:mx-auto flex flex-col mx-6 sm:mx-10 relative z-10">
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-[2.5rem] px-4 py-8 sm:px-0 sm:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0 lg:hidden"
          >
            <div className="absolute -top-6 left-1/2 h-40 w-40 -translate-x-[70%] rounded-full bg-lumiblue/60 blur-3xl animate-blob" />
            <div className="absolute top-20 left-1/2 h-44 w-44 -translate-x-[10%] rounded-full bg-lumiorange/55 blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-lumigray/70 blur-3xl animate-blob animation-delay-4000" />
          </motion.div>
          <img
            className="w-full h-full xl:h-96 mx-auto object-cover relative z-10"
            src="/lumipeople.png"
            alt="Lumi People"
            loading="eager"
          />
          <p className="font-light mb-5 text-lg sm:text-xl text-center relative z-10">
            En Lumi People, nos especializamos en brindar soluciones integrales
            que se adapten a las necesidades de tu empresa. Con un equipo
            multicultural y una amplia experiencia, ofrecemos atención en tu
            idioma y nos convertimos en tu socio estratégico para ayudarte a
            alcanzar tus objetivos.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-5 mb-6 lg:hidden relative z-10"
          >
            <Link
              target="_blank"
              href="https://www.facebook.com/lumipeople"
              className="text-lumiblue hover:text-lumiorange"
            >
              <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.96 }}>
                <FaFacebookSquare className="text-3xl" />
              </motion.div>
            </Link>
            <Link
              target="_blank"
              href="https://ar.linkedin.com/company/lumi-people-ar"
              className="text-lumiblue hover:text-lumiorange"
            >
              <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.96 }}>
                <FaLinkedin className="text-3xl" />
              </motion.div>
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/lumipeople.ar/"
              className="text-lumiblue hover:text-lumiorange"
            >
              <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.96 }}>
                <FaInstagramSquare className="text-3xl" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center items-center sm:justify-center">
          <Link href="/sobrenosotros">
            <Button className="flex gap-2 w-full sm:w-auto text-lg font-normal bg-lumiorange shadow-xl">
              ¿Quienes somos?
              <IoMdInformationCircleOutline className="text-lumiblue" />
            </Button>
          </Link>
          <Link href="/vacantes">
            <Button className="flex gap-2 w-full sm:w-auto text-lg font-normal bg-lumiorange shadow-xl">
              Trabaja con nosotros!
              <BsPersonWorkspace className="text-lumiblue" />
            </Button>
          </Link>
        </div>
      </div>

      <motion.div
        id="right-animation"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-lg ml-8 sm:mr-0 z-30 hidden lg:block"
      >
        <div className="absolute top-10 md:left-1/2 w-56 h-56 bg-lumigray rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob" />
        <div className="absolute -top-24 md:left-60 w-56 h-56 bg-lumiblue rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -top-24 md:left-1/3 w-56 h-56 bg-lumiorange rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-4000" />
      </motion.div>
    </div>
  );
};

export default Hero;
