import React from "react";
import { Button } from "../ui/button";
import { FaFolderMinus, FaPhone } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="block h-full sm:flex w-full mx-auto items-center justify-center">
      <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-3/4 m,mx-auto">
        <div className="relative w-full max-w-lg mr-8 sm:mr-0 z-50">
          <div className="absolute top-10 -left-80 w-72 h-72 bg-lumigray rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob"></div>
          <div className="absolute -top-0 right-80 w-72 h-64 bg-lumiblue rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -top-52 -left-72 w-72 h-72 bg-lumiorange rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="sm:text-left max-w-xl mx-auto flex flex-col smÑmr-20">
          <div className=" w-full flex flex-col items-center justify-center">
            <img
              className="w-[550px] h-96 mx-auto object-cover"
              src="/lumipeople.png"
              alt="Lumi People"
            />
            <p className="text-lg sm:text-start text-center text-lumigray sm:text-xl mb-8">
              En Lumi People, estamos comprometidos a brindar soluciones
              innovadoras y personalizadas para tus necesidades de Recursos
              Humanos. Con un equipo multicultural y 19 años de experiencia,
              ofrecemos atención en tu idioma y resultados que superan tus
              expectativas.
            </p>
          </div>
          <div className="flex gap-2 justify-center items-center sm:justify-start">
            <Button className="flex gap-2 text-lg font-normal bg-lumiorange shadow-xl">
              Contáctanos <FaPhone className="text-lumiblue" />
            </Button>
            <Button className="flex gap-2 text-lg font-normal bg-lumiorange shadow-xl">
              Trabaja con nosotros!{" "}
              <BsPersonWorkspace className="text-lumiblue" />
            </Button>
          </div>
        </div>
        <div className="relative z-50 w-full sm:w-3/4 ">
        <div className="absolute top-10 left-48  w-64 h-64 bg-lumigray rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob"></div>
          <div className="absolute top-52  left-48 w-64 h-64 bg-lumiblue rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-52  w-64 h-64  bg-lumiorange rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
