import { VacancyCard } from "@/components/VacantesCard/Vacantes";
import React from "react";

const vacante = [
  {
    titulo: "Desarrollador Web",
    localidad: "Ciudad de México",
    descripcion:
      "Estamos buscando un desarrollador web con experiencia en React.js y Node.js para unirse a nuestro equipo.",
  },
  {
    titulo: "Diseñador Gráfico",
    localidad: "Barcelona, España",
    descripcion:
      "Buscamos un diseñador gráfico creativo y apasionado para trabajar en proyectos emocionantes.",
  },
  // Agrega más vacantes aquí...
];

function App() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Vacantes Disponibles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vacante.map((vacante, index) => (
            <VacancyCard key={index} vacante={vacante} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
