import About from "@/components/About/About";
import BlogCard from "@/components/BlogCard/BlogCard";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}
