import React, { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import navimg from "../assets/navimg.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // scroll top + close menus on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
    setServiceOpen(false);
  }, [location.pathname]);

  // navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path ? "text-sky-500" : "text-gray-800";

  return (
    <>
      {/* TOP BAR */}
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

      {/* MAIN NAVBAR */}
      <div
        className={`w-full bg-white sticky top-0 z-50 transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/">
            <img src={navimg} alt="logo" className="w-36 md:w-52" />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-semibold">
            <li>
              <Link to="/" className={isActive("/")}>
                HOME
              </Link>
            </li>

            {/* SERVICES */}
            <li
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <span className="flex items-center gap-1 cursor-pointer text-gray-800">
                SERVICES <ChevronDown size={16} />
              </span>

              {serviceOpen && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-64 py-3">
                  {[
                    ["Packing & Moving", "/packing"],
                    ["Household Shifting", "/household"],
                    ["Office Shifting", "/office"],
                    ["Loading & Unloading", "/loading"],
                    ["Warehouse Services", "/warehouse"],
                    ["Insurance Services", "/insurance"],
                    ["Local Shifting Services", "/local"],
                    ["Car Transportation", "/car"],
                    ["Escorting", "/escort"],
                  ].map(([name, link]) => (
                    <Link
                      key={name}
                      to={link}
                      className={`block px-6 py-2 text-sm hover:bg-gray-100 ${isActive(
                        link
                      )}`}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link to="/about" className={isActive("/about")}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/branches" className={isActive("/branches")}>
                BRANCHES
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActive("/contact")}>
                CONTACT
              </Link>
            </li>
            <li>
               <Link to="/gallery" className={isActive("/gallery")}>
               GALLERY
               </Link>
            </li>
          </ul>

          {/* DESKTOP CTA */}
          <Link
            to="/get-quote"
            className="hidden md:block bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 font-semibold rounded-md transition-colors"
          >
            Get A Quote
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-5 py-5 space-y-5 text-gray-800">
            <Link
              to="/"
              className={`block text-lg font-semibold ${isActive("/")}`}
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>

            {/* MOBILE SERVICES */}
            <div className="space-y-3">
              <button
                className="flex w-full items-center justify-between text-lg font-semibold"
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
                  {[
                    ["Packing & Moving", "/packing"],
                    ["Household Shifting", "/household"],
                    ["Office Shifting", "/office"],
                    ["Loading & Unloading", "/loading"],
                    ["Warehouse Services", "/warehouse"],
                    ["Insurance Services", "/insurance"],
                    ["Local Shifting Services", "/local"],
                    ["Car Transportation", "/car"],
                    ["Escorting", "/escort"],
                  ].map(([name, link]) => (
                    <Link
                      key={name}
                      to={link}
                      className={`block ${isActive(link)}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`block text-lg font-semibold ${isActive("/about")}`}
              onClick={() => setMenuOpen(false)}
            >
              ABOUT US
            </Link>

            <Link
              to="/branches"
              className={`block text-lg font-semibold ${isActive("/branches")}`}
              onClick={() => setMenuOpen(false)}
            >
              BRANCHES
            </Link>

            <Link
              to="/contact"
              className={`block text-lg font-semibold ${isActive("/contact")}`}
              onClick={() => setMenuOpen(false)}
            >
              CONTACT
            </Link>

              <Link
              to="/gallery"
              className={`block text-lg font-semibold ${isActive("/contact")}`}
              onClick={() => setMenuOpen(false)}
            >
              GALLERY
            </Link>

            <Link
              to="/get-quote"
              className="block text-center w-full bg-sky-500 text-white py-3 rounded-md text-lg font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Get A Quote
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
