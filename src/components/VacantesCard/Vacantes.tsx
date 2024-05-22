import React from "react";
import { BsGeoAlt, BsCardText } from "react-icons/bs";
import { Button } from "../ui/button";
import {
  FaArrowAltCircleRight,
  FaCalendarAlt,
  FaDollarSign,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Link from "next/link";

interface IAboutProps {
  vacante: string | any;
}

export const VacancyCard = ({ vacante }: IAboutProps) => {
  return (
    <div className="rounded-md shadow-md p-4 flex items-center">
      <div className=" w-full h-full">
        <div className="flex items-center">
          <h3 className="text-lg  text-lumiorange font-bold ">
            {vacante.titulo}
          </h3>
        </div>
        <div className="flex items-center mt-2">
          <span className="flex items-center mr-2">
            <FaMapMarkerAlt className="mr-1" />
            <span>{vacante.localidad}</span>
          </span>
          <span className="flex items-center">
            <FaCalendarAlt className="mr-1" />
            <span>{vacante.fecha}</span>
          </span>
        </div>
        <p className="mt-4 text-gray-600">{vacante.descripcion}</p>
      </div>
      <Button className=" bg-lumiorange shadow-xl">
        <Link
        target="_blank"
          className="flex gap-2  text-lg font-normal items-center justify-center"
          href={vacante.url}
        >
          Aplicar <FaArrowRightToBracket />
        </Link>
      </Button>
    </div>
  );
};
