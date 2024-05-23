"use client";
import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Noticias() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
      className="my-10"
    >
      <div className="mx-auto max-w-screen-sm text-center mb-4 lg:mb-4">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold ">
          {" "}
          Noticias e Información
        </h2>
        <p className="font-light  lg:mb-10 sm:text-xl ">
          ¡Bienvenido al Centro de Noticias de Lumi!
        </p>
      </div>
      {/* Seccion de iframe con dos articulos al lado */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4 p-4 ">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 ">
          <div className="relative pt-[56.25%] overflow-hidden h-full">
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.youtube.com/embed/vhQzavbDAMw?si=xTOXMkSoorNhfw5r"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>

        <BlogCard
          imgSrc="/ComoelaborarCV.webp"
          title="Cómo Elaborar un Buen Currículum: Guía Completa"
          text="Aprende como armar tu curriculum con expertos en el tema!"
          id="como-elaborar-un-buen-curriculum"
        />

        <BlogCard
          imgSrc="/EntrevistaPresencial.webp"
          title="Cómo Prepararse para una Entrevista Presencial: Guía Completa"
          text="Prepararse adecuadamente para una entrevista presencial es crucial para causar una buena impresión y aumentar tus posibilidades de obtener el empleo"
          id="como-preparase-para-una-entrevista-presencial"
        />
      </section>
      {/* Articulos de mas abajo */}
      <section className="grid grid-cols-2 md:grid-cols-3  container mx-auto gap-4 p-4 ">
        <BlogCard
          imgSrc="/EntrevistaVirtual.webp"
          title="Cómo Prepararse para una Entrevista Virtual: Guía Completa"
          text="Con la creciente tendencia del teletrabajo, las entrevistas virtuales se han convertido en una práctica común"
          id="como-preparase-para-una-entrevista-virtual"
        />

        <BlogCard
          imgSrc="/Networking.webp"
          title="Cómo Realizar Networking: Guía Completa"
          text="Descubre cómo realizar networking de manera efectiva y construir relaciones valiosas en tu industria. Desde definir tus objetivos hasta participar en eventos y mantener el contacto."
          id="como-realizar-networking"
        />
        <BlogCard
          imgSrc="/Redessocialestrabajo.webp"
          title="¿En Qué Redes Sociales Buscan los Reclutadores?"
          text="Descubre las principales redes sociales que utilizan los reclutadores y cómo puedes optimizar tu presencia en ellas para mejorar tus oportunidades de empleo."
          id="en-que-redes-buscan-los-reclutadores"
        />
        <BlogCard
          imgSrc="/HabilidadesHard.webp"
          title="Las Habilidades Hard Más Valoradas en la Actualidad: Guía Completa"
          text="Descubre las habilidades hard más demandadas en el entorno laboral actual y aprende cómo desarrollarlas para mejorar tu perfil profesional. Desde la programación y el análisis de datos hasta la ciberseguridad y la gestión de proyectos, esta guía te ofrece estrategias prácticas para adquirir competencias técnicas clave."
          id="habilidades-hard"
        />
        <BlogCard
          imgSrc="/HabilidadesSoft.webp"
          title="Las Habilidades Soft Más Valoradas en la Actualidad: Guía Completa"
          text="Descubre las habilidades soft más valoradas en el entorno laboral actual y aprende cómo desarrollarlas para destacarte en el mercado laboral. Desde la comunicación efectiva hasta el liderazgo, esta guía te ofrece estrategias prácticas para mejorar tus competencias interpersonales y cognitivas."
          id="habilidades-soft"
        />
        <BlogCard
          imgSrc="/Perfilesmasdemandados.webp"
          title="Perfiles Más Demandados en la Industria de la Minería"
          text="Explora los perfiles profesionales más demandados en la industria de la minería. Desde ingenieros y técnicos hasta profesionales en higiene, seguridad y recursos humanos, descubre las habilidades clave necesarias para destacar en este sector vital."
          id="perfiles-mas-demandados-en-la-industria"
        />
       <div className="col-span-1 sm:col-span-2 lg:col-span-1 row-span-2 ">
          <div className="relative pt-[56.25%] overflow-hidden h-full">
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.youtube.com/embed/tG6i1Q4hOiY?si=KB32mnkwW5R0z__R"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 ">
          <div className="relative pt-[56.25%] overflow-hidden h-full">
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.youtube.com/embed/P2v0UxmhUpw?si=yUVoy-W8jxqh-xms"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </section>

      {/* <section className="grid grid-cols-3 container mx-auto gap-4 p-4 font-bold">
        <div className="relative">
          <BlogCard
            imgSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Como armar tu cv"
            text="aprende como armar tu curriculum con expertos en el tema!"
          />
        </div>

        <div className="relative">
          <BlogCard
            imgSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Como armar tu cv"
            text="aprende como armar tu curriculum con expertos en el tema!"
          />
        </div>
        <div className="relative">
          <BlogCard
            imgSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Como armar tu cv"
            text="aprende como armar tu curriculum con expertos en el tema!"
          />
        </div>
      </section> */}
    </motion.div>
  );
}
