import About from "@/components/About/About";
import BlogCard from "@/components/BlogCard/BlogCard";
import Equipo from "@/components/Equipo/Equipo";
import Hero from "@/components/Hero/Hero";
import OpenPositions from "@/components/PosicionesAbiertas/OpenPositions";
import Servicios from "@/components/Servicios/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <About />
      <Servicios />
      <Equipo />
      <OpenPositions />
    </div>
  );
}
