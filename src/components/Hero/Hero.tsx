import React from "react";
import { Button } from "../ui/button";
import { FaFolderMinus, FaPhone } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="block h-full sm:flex w-full mx-auto items-center justify-center mb-20">
      <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-3/4 mx-auto">
        {/* Animación izquierda */}
        <div className="relative w-full max-w-lg mr-8 sm:mr-0 z-50 hidden lg:block">
          <div className="absolute top-10 -left-1/2 md:-left-72 w-56 h-56 bg-lumigray rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob"></div>
          <div className="absolute -top-24 md:-left-96 w-56 h-56 bg-lumiblue rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -top-24 -left-1/3 md:-left-60 w-56 h-56 bg-lumiorange rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Contenido principal */}
        <div className="sm:text-left max-w-xl mx-auto flex flex-col sm:mr-20">
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

        {/* Animación derecha */}
        <div
          id="right-animation"
          className="relative w-full max-w-lg ml-8 sm:mr-0 z-50 hidden lg:block"
        >
          <div className="absolute top-10 md:left-1/2 w-56 h-56 bg-lumigray rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob"></div>
          <div className="absolute -top-24 md:left-60 w-56 h-56 bg-lumiblue rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -top-24 md:left-1/3 w-56 h-56 bg-lumiorange rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
