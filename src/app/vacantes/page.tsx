import About from "@/components/About/About";
import Equipo from "@/components/Equipo/Equipo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VacancyCard } from "@/components/VacantesCard/Vacantes";
import React from "react";

const vacante = [
  {
    titulo: "Desarrollador Web",
    localidad: "Ciudad de México",
    descripcion:
      "Estamos buscando un desarrollador web con experiencia en React.js y Node.js para unirse a nuestro equipo.",
    salario: "100",
    fecha: "17 Agosto 2024",
  },
  {
    titulo: "Diseñador Gráfico",
    localidad: "Barcelona, España",
    descripcion:
      "Buscamos un diseñador gráfico creativo y apasionado para trabajar en proyectos emocionantes.",
    salario: "100",
    fecha: "17 Diciembre 2024",
  },
  {
    titulo: "Diseñador Gráfico",
    localidad: "Barcelona, España",
    descripcion:
      "Buscamos un diseñador gráfico creativo y apasionado para trabajar en proyectos emocionantes.",
    salario: "100",
    fecha: "17 Agosto 2024",
  },
  {
    titulo: "Diseñador Gráfico",
    localidad: "Barcelona, España",
    descripcion:
      "Buscamos un diseñador gráfico creativo y apasionado para trabajar en proyectos emocionantes.",
    salario: "100",
    fecha: "30 Enero 2024",
  },
  // Agrega más vacantes aquí...
];

function App() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto py-8">
      <hr className="w-fit" />
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-screen-sm text-center mb-4 lg:mb-4">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold ">
            {" "}
            Vacantes disponibles!
          </h2>
          <p className="font-light  lg:mb-10 sm:text-xl ">
            Construye tu futuro con nosotros. ¡Únete al equipo ahora!
          </p>
        </div>
        <form className="flex my-4">
          <Input placeholder="Buscar puesto" type="text" />
          <Button>Buscar</Button>
        </form>
        <div className="flex flex-col">
          {vacante.map((vacante, index) => (
            <VacancyCard key={index} vacante={vacante} />
          ))}
        </div>
      </div>
      <Equipo />
    </div>
  );
}

export default App;
