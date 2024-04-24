import React from "react";
import { BsGeoAlt, BsCardText } from "react-icons/bs";
import { Button } from "../ui/button";
import { FaCalendarAlt, FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";

interface IAboutProps {
  vacante: string | any;
}

export const VacancyCard = ({ vacante }: IAboutProps) => {
  return (
    <div className=" rounded-md shadow-md p-4">
      <div className="flex items-center">
        <h3 className="text-lg font-medium ">{vacante.titulo}</h3>
      </div>
      <div className="flex items-center mt-2">
        <span className="flex items-center mr-2">
          <FaMapMarkerAlt className="mr-1" />
          <span>{vacante.localidad}</span>
        </span>
        <span className="flex items-center mr-2">
          <FaDollarSign className="mr-1" />
          <span>{vacante.salario}</span>
        </span>
        <span className="flex items-center">
          <FaCalendarAlt className="mr-1" />
          <span>{vacante.fecha}</span>
        </span>
      </div>
      <p className="mt-4 text-gray-600">{vacante.descripcion}</p>
      <Button className="mt-4  font-medium py-2 px-4 rounded-md">
        Ver detalle
      </Button>
    </div>
  );
};
