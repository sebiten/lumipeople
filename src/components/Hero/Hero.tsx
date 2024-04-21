import React from "react";
import { Button } from "../ui/button";
import { FaFolderMinus, FaPhone } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="block sm:flex max-w-7xl mx-auto  items-center justify-center">
      <div>
        <img className="w-full" src="/lumipeople.png" />
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Transformando Recursos Humanos
          </h1>
          <p className="text-lg text-lumigray sm:text-xl mb-8">
            En Lumi People, estamos comprometidos a brindar soluciones
            innovadoras y personalizadas para tus necesidades de Recursos
            Humanos. Con un equipo multicultural y 19 años de experiencia,
            ofrecemos atención en tu idioma y resultados que superan tus
            expectativas.
          </p>
          <div className=" flex gap-2 justify-center items-center w-full">
            <Button className=" flex gap-2 text-lg font-normal bg-lumiorange   shadow-xl  ">
              Contáctanos <FaPhone className="text-lumiblue" />
            </Button>
            <Button className="flex gap-2 text-lg font-normal bg-lumiorange shadow-xl  ">
              Trabaja con nosotros!{" "}
              <BsPersonWorkspace className="text-lumiblue" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
