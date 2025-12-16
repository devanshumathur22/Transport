import React from "react";
import { Globe, ShieldCheck, Headset } from "lucide-react";
import hero from "../assets/hero.jpeg";

export default function FeaturesBanner() {
  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url(" + hero + ")",}}>
     
      <div className="absolute inset-0 bg-[#0b1240]/90"></div>

      
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16 text-white">  
       
        <div className="flex gap-6">
          <Globe size={48} className="text-sky-400" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">Fast delivery</h3>
            <p className="text-gray-300 leading-relaxed">
              Best transportation facility to deliver goods on time.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <ShieldCheck size={48} className="text-sky-400" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Safe and Secure Service
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Registered and IBA approved packer and mover in Patna.
            </p>
          </div>
        </div>       
        <div className="flex gap-6">
          <Headset size={48} className="text-sky-400" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              24/7 customer support
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Once you hire us, you will never prefer others. We assist and
              support you in every moment during shifting.
            </p>
          </div>
        </div>
      </div>     
    </section>    
  );
}
