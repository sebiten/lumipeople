import About from "@/components/About/About";
import Equipo from "@/components/Equipo/Equipo";
import React from "react";

interface IpageProps {}

export default function page() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-16 ">
        <div className="container m-auto px-6  md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-lumiorange font-bold md:text-4xl">
                ¿Quienes Somos?
              </h2>
              <p className="mt-6 ">
                Lumi People es una empresa integrada por un gran equipo de
                profesionales especializados en el área de Recursos Humanos con
                distintas nacionalidades, para brindar atención en el mismo
                idioma de nuestros clientes. Contamos con 19 años de experiencia
                en México, con el objetivo de fomentar el desarrollo y
                suministro de servicios que permitan a nuestros clientes
                encontrar soluciones innovadoras y eficientes a sus problemas de
                Capital Humano y en la planeación de recursos humanos. Nuestra
                meta es obtener la satisfacción total de nuestros clientes con
                nuestros servicios personalizados, buscando posicionarnos en
                todo el continente Americano y posteriormente a nivel mundial
              </p>
            </div>
          </div>
        </div>
      </div>
      <Equipo />
      <About />
    </div>
  );
}
