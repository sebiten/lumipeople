import React from "react";

interface INoticiasProps {}

export default function Noticias() {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-10">
        Noticias e Informacion
      </h2>
      <section className="grid grid-cols-3 container mx-auto gap-4 p-4 ">
        <div className="col-span-2 row-span-2">
          <div className="relative pt-[56.25%] overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.youtube.com/embed/8VTb2votTM0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>

          <h3 className="mt-2 text-lg truncate uppercase bg-black/85 text-center tracking-wider">
            <span className="opacity-100">Lorem Ipsum</span>
          </h3>
        </div>

        <div className="relative">
          <div className="relative pt-[56.25%] overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1168&q=80"
              alt=""
            />
          </div>

          <h3 className="absolute inset-x-0 font-bold bottom-0 pt-2 bg-black/85 text-center  text-lg truncate uppercase tracking-wider">
            Dolor Sit Amet
          </h3>
        </div>

        <div className="relative">
          <div className="relative pt-[56.25%] overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>

          <h3 className="absolute inset-x-0 font-bold bottom-0 bg-black/85 text-center  pt-2 text-lg truncate uppercase tracking-wider">
            Blog 2 Title here
          </h3>
        </div>
      </section>
      <section className="grid grid-cols-3 container mx-auto gap-4 p-4 font-bold">
        <div className="relative">
          <div className="relative pt-[56.25%] overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1168&q=80"
              alt=""
            />
          </div>

          <h3 className="absolute inset-x-0 font-bold bottom-0 bg-black/85 text-center  pt-2 text-lg truncate uppercase tracking-wider">
            Dolor Sit Amet
          </h3>
        </div>

        <div className="relative">
          <div className="relative pt-[56.25%] overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>

          <h3 className="absolute inset-x-0 font-bold bottom-0 bg-black/85 text-center  pt-2 text-lg truncate uppercase tracking-wider">
            Blog 2 Title here
          </h3>
        </div>
        <div className="relative">
          <div className="relative pt-[56.25%] overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>

          <h3 className="absolute inset-x-0 font-bold bg-black/85 text-center bottom-0 pt-2 text-lg truncate uppercase tracking-wider">
            Blog 2 Title here
          </h3>
        </div>
      </section>
    </div>
  );
}
