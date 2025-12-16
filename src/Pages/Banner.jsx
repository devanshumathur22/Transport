import React from "react";
import { Globe, ShieldCheck, Headphones } from "lucide-react";
import hero from "../assets/hero.jpeg";

export default function Banner() {
  return (
    <section className="relative w-full h-auto flex items-center overflow-hidden ">
      <img
        src={hero}
        alt="Packers and Movers"
        className="absolute inset-0 w-full h-full object-cover "/>

     
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1240] via-[#0b1240]/90 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mb-36">
        <div className="max-w-xl text-white">
          
          <p className=" text-4xl mt-24">
           Reach Your Destination
          </p>

          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-4">
            100% Sure And Safe
          </h1>

          <h2 className="text-4xl md:text-5xl font-semibold text-sky-400 mb-6">
            +91 9471458066
          </h2>

          <p className="text-gray-200 leading-relaxed mb-8">
            As a reliable service provider in packers and movers solutions,
            Logistic brings your goods safely to their worldwide destinations.
          </p>

          <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 font-medium">
            Request Quote
          </button>

        </div>
      </div>
    </section>
);
}

