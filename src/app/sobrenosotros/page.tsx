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
import { Button } from "@/components/ui/button";
import { FaArrowRightToBracket } from "react-icons/fa6";
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
                src="/Aboutus.webp"
                alt="lumiteam"
                loading="lazy"
                className="rounded-2xl"
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

                <motion.p className="font-light  lg:mb-4 sm:text-xl text-start">
                  Con casa Matriz en Mexico y sede en Argentina, Lumi People es
                  una empresa integrada por un gran equipo de profesionales
                  especializados en Recursos Humanos, para brindar atención
                  personalizada a cada uno de nuestros clientes. Contamos con
                  experiencia brindado nuestros servicios a clientes
                  estrategicos que desarrollan principalmente actividades
                  mineras en salta. Nuestro objetivo es encontrar para cada uno
                  soluciones dinamicas y eficientes. Boton: Obtener un
                  presupuesto.
                </motion.p>
                <Button className="flex gap-2 text-lg font-normal bg-lumiorange shadow-xl">
                  Obtén tu presupuesto sin compromiso{" "}
                  <FaArrowRightToBracket className="text-lumiblue" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-center text-2xl font-bold text-lumigray mt-4">
        Empresas con la que colaboramos
      </h3>
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
                  loading="lazy"
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
