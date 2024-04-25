import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaHandshakeAngle, FaServicestack } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      nombre: "Estrategias de marketing digital",
      descripcion:
        "Creamos estrategias personalizadas de marketing digital para potenciar tu presencia en línea y alcanzar tus objetivos comerciales.",
      icono: "https://i.ibb.co/gFb3ns6/image-1.jpg",
    },
    {
      id: 2,
      nombre: "Gestión de redes sociales",
      descripcion:
        "Gestionamos tus redes sociales para aumentar tu visibilidad, interactuar con tu audiencia y generar leads cualificados.",
      icono: "https://i.ibb.co/rfHFq15/image-2.jpg",
    },
    {
      id: 3,
      nombre: "Desarrollo de contenido",
      descripcion:
        "Creamos contenido relevante y atractivo para tu marca, desde publicaciones en blogs hasta videos promocionales, para conectar con tu audiencia.",
      icono: "https://i.ibb.co/rfHFq15/image-2.jpg",
    },
  ];

  return (
    <section className="w-full mx-auto my-16">
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-2">
        <div className="mx-auto max-w-screen-sm text-center mb-4 lg:mb-4">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold border-b">
            {" "}
            Nuestros servicios <MdWork className="inline-block" />
            <hr className="border-b border-lumiblue border-dotted mt-2" />
          </h2>
          <p className="font-light  lg:mb-10 sm:text-xl ">
            Ofrecemos una amplia gama de servicios diseñados para satisfacer tus
            necesidades y superar tus expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <Image
                  src={servicio.icono}
                  alt={servicio.nombre}
                  width={400}
                  height={400}
                  className="object-cover rounded-lg mx-auto "
                />
              </div>
              <h3 className="text-xl mb-2 text-lumiorange uppercase">
                {servicio.nombre}
              </h3>
              <p className=" mb-4">{servicio.descripcion}</p>
              <ul className="">
                <li className="flex items-center mb-2">
                  <FaCheck className="text-lumiblue mr-2" /> Servicio
                  profesional y de calidad
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-lumiblue mr-2" /> Personal altamente
                  capacitado y confiable
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-lumiblue mr-2" /> Equipos y productos
                  de limpieza de alta calidad
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
