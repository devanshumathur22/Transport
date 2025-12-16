import React from "react";
import { Link } from "react-router-dom";
import navimg from "../assets/nav.jpg"
import {
  MapPin,
  Phone,
  Clock,
  ChevronRight,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className=" bg-[#0b1240] text-gray-200">         
        <div className=" px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-12">   
          <div>
            <img src={navimg} alt=""  className="size-32 w-2xl"/>
            </div>   

          <div className="flex  gap-3 mt-10 ">            
            <MapPin className="text-sky-400 size-12 " />
            <p className="text-sm leading-relaxed">
              <span className="font-semibold text-white">Address :</span> New bypass
              changar road no 8A Ashok Nagar Kankarbagh<br />
              PATNA 800020, INDIA
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-sky-400 " />
            <p className="text-sm leading-relaxed">
              <span className="font-semibold text-white">Toll Free Number :</span><br />
              +91 9471458066
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="text-sky-400 " />
            <p className="text-sm">
              <span className="font-semibold text-white">Opening Hours :</span><br />
              MON – SUN: 8AM – 5PM
            </p>
          </div>
        </div>
 

       {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">       
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            ABOUT MAHI PACKERS AND MOVERS
          </h3>
          <p className="leading-loose">
            Mahi Packers and Movers is an indian supplier of transport and
            logistics solutions. We have offices in more than 20 cities and an
            domestic network of partners and agents.
          </p>
        </div>
       
       <div>
  <h3 className="text-lg font-semibold text-white mb-4">
    USEFUL LINKS
  </h3>
  <ul className="space-y-2 text-sm">
    {[
      { name: "Packing and Moving Services", path: "/Packing" },
      { name: "Household Goods Shifting", path: "/Household" },
      { name: "Office Shifting", path: "/Office" },
      { name: "Loading and Unloading", path: "/Loading" },
      { name: "Warehouse Services", path: "/Warehouse" },
    ].map((item, i) => (
      <li key={i}>
        <Link
          to={item.path}
          className="flex items-center gap-2 hover:text-yellow-400 transition">
          <ChevronRight size={14} />
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>


<div>
  <h3 className="text-lg font-semibold text-white mb-4">
    USEFUL LINKS
  </h3>
  <ul className="space-y-2 text-sm">
    {[
      { name: "Insurance Services", path: "/Insurance" },
      { name: "Local Shifting Services", path: "/Local" },
      { name: "Car Transportation", path: "/Car" },
      { name: "Escorting", path: "/Escort" },
    ].map((item, i) => (
      <li key={i}>
        <Link
          to={item.path}
          className="flex items-center gap-2 hover:text-yellow-400 transition">
          <ChevronRight size={14} />
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>
      
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            OUR NEWSLETTER
          </h3>
          <p className="text-sm mb-4">
            Sign up today for tips and latest news and exclusive special offers.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 bg-transparent border border-white/30 outline-none text-sm"/>
            <button className="bg-sky-500 hover:bg-sky-600 px-4 text-white text-sm">
              Sign Up
            </button>
          </div>

          <p className="text-xs mt-3 text-gray-300">
            We don’t do spam and Your mail id very confidential.
          </p>
        </div>

      </div>
     
      <div className="bg-[#09102f] py-4 text-center text-sm">
        Copyright © 2025{" "}
        <span className="text-sky-400">Preferwork Technology</span>, All Right Reserved
      </div>

    </footer>
  );
}
