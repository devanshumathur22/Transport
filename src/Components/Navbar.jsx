import React, { useState } from "react";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import navimg from "../assets/nav.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <>
      {/* TOP BAR  */}
      <div className="hidden md:block w-full bg-[#0b1240] text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} /> +91 9471458067
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> mahipackersandmovers.in@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <img src={navimg} alt="logo" className="w-36 md:w-52" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-800">
            <li><Link to="/">HOME</Link></li>

            <li
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <span className="flex items-center gap-1 cursor-pointer">
                SERVICES <ChevronDown size={16} />
              </span>

              {serviceOpen && (
                <div className="absolute left-0 top-full bg-white shadow-lg w-64 py-3">
                  {[
                    ["Packing & Moving", "/packing"],
                    ["Household Shifting", "/household"],
                    ["Office Shifting", "/office"],
                    ["Loading & Unloading", "/loading"],
                    ["Warehouse Services", "/warehouse"],
                    ["Insurance Services","/insurance"],
                    ["Local Shifting Services","/local"],
                    ["Car Transportation","/car"],
                    ["Escorting","/escort"]
                  
                  ].map(([name, link]) => (
                    <Link
                      key={name}
                      to={link}
                      className="block px-6 py-2 hover:bg-gray-100"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/branches">BRANCHES</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>

          {/* Desktop CTA */}
          <button className="hidden md:block bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 font-semibold rounded">
            Get A Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

       {menuOpen && (
  <div className="md:hidden bg-white border-t px-5 py-5 space-y-5 text-gray-800">

    <Link
      to="/"
      className="block text-lg font-semibold cursor-pointer"
      onClick={() => setMenuOpen(false)}
    >
      HOME
    </Link>

    {/* SERVICES */}
    <div className="space-y-3">
      <button
        className="flex w-full items-center justify-between text-lg font-semibold cursor-pointer"
        onClick={() => setServiceOpen(!serviceOpen)}
      >
        SERVICES
        <ChevronDown
          size={20}
          className={`transition-transform ${
            serviceOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {serviceOpen && (
        <div className="pl-4 space-y-3 text-gray-600">
          <Link className="block cursor-pointer" to="/packing">Packing & Moving</Link>
          <Link className="block cursor-pointer" to="/household">Household Shifting</Link>
          <Link className="block cursor-pointer" to="/office">Office Shifting</Link>
          <Link className="block cursor-pointer" to="/loading">Loading & Unloading</Link>         
          <Link className="block cursor-pointer" to="/warehouse">Warehouse Services</Link>
          <Link className="block cursor-pointer" to="/insurance">Insurance Services</Link> 
          <Link className="block cursor-pointer" to="/local">Local Shifting Services</Link> 
          <Link className="block cursor-pointer" to="/car">Car Transportation</Link>    
          <Link className="block cursor-pointer" to="/escort">Escorting Services</Link> 
          

        </div>
      )}
    </div>

    <Link className="block text-lg font-semibold cursor-pointer" to="/about">
      ABOUT US
    </Link>

    <Link className="block text-lg font-semibold cursor-pointer" to="/branches">
      BRANCHES
    </Link>

    <Link className="block text-lg font-semibold cursor-pointer" to="/contact">
      CONTACT
    </Link>

    <button className="w-full bg-sky-500 text-white py-3 rounded text-lg font-semibold cursor-pointer">
      Get A Quote
    </button>
  </div>
)}

      </div>
    </>
  );
}
