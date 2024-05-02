"use client";
import About from "@/components/About/About";
import Equipo from "@/components/Equipo/Equipo";
import React from "react";
import { motion } from "framer-motion";
interface IpageProps {}
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
 // principal ancha
 // foto de lumipeople abril
const images = [
  "/lumipeople.png",
  "/lumipeople.png",
  "/lumipeople.png",
  "/lumipeople.png",
  "/lumipeople.png",
];

export default function page() {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="max-w-7xl mx-auto">
      <div className=" mt-10">
        <div className="container m-auto px-6  md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                src="/About.jpg"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <div className="mx-auto max-w-screen-sm  mb-8 lg:mb-16">
                <hr className="my-4"></hr>
                <motion.h2
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="mb-4 text-3xl tracking-tight font-extrabold text-lumiorange"
                >
                  ¿Quienes Somos?
                </motion.h2>

                <motion.p className="font-light  lg:mb-16 sm:text-xl text-start">
                  Lumi People es una empresa integrada por un gran equipo de
                  profesionales especializados en el área de Recursos Humanos
                  con distintas nacionalidades, para brindar atención en el
                  mismo idioma de nuestros clientes. Contamos con 19 años de
                  experiencia en México, con el objetivo de fomentar el
                  desarrollo y suministro de servicios que permitan a nuestros
                  clientes encontrar soluciones innovadoras y eficientes a sus
                  problemas de Capital Humano y en la planeación de recursos
                  humanos. Nuestra meta es obtener la satisfacción total de
                  nuestros clientes con nuestros servicios personalizados,
                  buscando posicionarnos en todo el continente Americano y
                  posteriormente a nivel mundial
                </motion.p>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-center text-lg font-bold">Empresas con la que colaboramos</h3>
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[plugin.current]}
        className="w-full max-w-sm lg:max-w-7xl mx-auto"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <About />
    </div>
  );
}
