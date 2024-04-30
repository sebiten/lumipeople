"use client"
import React from "react";
import Blob from "../Blob/Blob";
import {
  FaBriefcase,
  FaLaptop,
  FaUserFriends,
  FaHandsHelping,
} from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import { Button } from "../ui/button";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import Link from "next/link";
import { motion } from "framer-motion";

interface IOpenPositionsProps {}

export default function OpenPositions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pb-14 my-12 shadow-lg max-w-7xl mx-auto"
    >
      <div className="mx-auto  text-center px-4 lg:px-8">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold ">
            ¿Quieres Trabajar con Nosotros?{" "}
            <GrWorkshop className="inline-block" />
            <hr className="border-b border-lumiblue border-dotted mt-2" />
          </h2>
          <p className="font-light  lg:mb-16 sm:text-xl ">
            ¡Únete a nuestro equipo y sé parte de algo increíble! Estamos en
            busca de personas talentosas y apasionadas que deseen contribuir a
            nuestro crecimiento y éxito.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:gap-10 sm:justify-center sm:items-center">
          <div className="flex flex-col items-center">
            <div className="rounded-full p-4 shadow-lg">
              <FaBriefcase size={80} className="text-4xl text-lumiblue" />
            </div>
            <h3 className="text-xl  mt-4">Oportunidades</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full p-4 shadow-lg">
              <FaLaptop size={80} className="text-4xl text-lumiblue" />
            </div>
            <h3 className="text-xl  mt-4">Flexibilidad</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full p-4 shadow-lg">
              <FaUserFriends size={80} className="text-4xl text-lumiblue" />
            </div>
            <h3 className="text-xl  mt-4">Equipo increíble</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full p-4 shadow-lg">
              <FaHandsHelping size={80} className="text-4xl text-lumiblue" />
            </div>
            <h3 className="text-xl  mt-4">Impacto positivo</h3>
          </div>
        </div>
        <Link href="/vacantes">
          <Button className="flex gap-2  font-bold text-lg mx-auto my-10 bg-lumiorange shadow-xl">
            Ver Posiciones Abiertas!{" "}
            <BsPersonWorkspace className="text-lumiblue" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
