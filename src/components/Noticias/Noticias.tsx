"use client"
import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import { motion } from "framer-motion";

interface INoticiasProps {}

export default function Noticias() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
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

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4 p-4 ">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 ">
          <div className="relative pt-[56.25%] overflow-hidden h-full">
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.youtube.com/embed/8VTb2votTM0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          {/* <div className="relative">
            <h3 className="text-3xl mt-2 block">Lumi people Argentina</h3>
            <p className="text-lg tigh mt-2 block ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              deleniti unde veritatis minus mollitia perferendis cum libero rem
              esse porro provident fugit, blanditiis accusantium reprehenderit
              facere ipsam ab modi nemo. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              deleniti unde veritatis minus mollitia perferendis cum libero rem
              esse porro provident fugit, blanditiis accusantium reprehenderit
              facere ipsam ab modi nemo. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit.
            </p>
          </div> */}
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
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3  container mx-auto gap-4 p-4 font-bold">
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
        <div className="relative">
          <BlogCard
            imgSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Como armar tu cv"
            text="aprende como armar tu curriculum con expertos en el tema!"
          />
        </div>
      </section>
      <section className="grid grid-cols-3 container mx-auto gap-4 p-4 font-bold">
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
      </section>
    </motion.div>
  );
}
