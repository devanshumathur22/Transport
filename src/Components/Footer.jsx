import React from "react";
import { Link } from "react-router-dom";
import navimg from "../assets/navimg.jpg";
import { MapPin, Phone, Clock, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1240] text-gray-300">
      {/* TOP INFO BAR */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <img src={navimg} alt="logo" className="w-40" />
          </div>

          <div className="flex gap-3">
            <MapPin className="text-sky-400 mt-1" size={28} />
            <p className="text-sm leading-relaxed">
              <span className="font-semibold text-white">Address</span><br />
              Neuri Vikas, Near Sirat Nagar,<br />
              Outer Ring Road, Ranchi – 835217, Jharkhand
            </p>
          </div>

          <div className="flex gap-3">
            <Phone className="text-sky-400 mt-1" size={22} />
            <p className="text-sm">
              <span className="font-semibold text-white">Call Us</span><br />
              +91 9471458066
            </p>
          </div>

          <div className="flex gap-3">
            <Clock className="text-sky-400 mt-1" size={22} />
            <p className="text-sm">
              <span className="font-semibold text-white">Working Hours</span><br />
              Mon – Sun : 8:00 AM – 8:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* ABOUT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">
            ABOUT PRAJAPATI TRANSPORT
          </h3>
          <p className="text-sm leading-relaxed">
            Prajapati Transport Service provides secure and reliable transport
            and warehouse solutions for household, commercial, and business
            goods with complete safety and professional handling.
          </p>
          <p className="text-sm leading-relaxed mt-4">
            We offer flexible storage and relocation services focused on trust,
            cleanliness, and customer satisfaction.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">
            OUR SERVICES
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Packing & Moving", path: "/packing" },
              { name: "Household Goods Shifting", path: "/household" },
              { name: "Office Shifting", path: "/office" },
              { name: "Loading & Unloading", path: "/loading" },
              { name: "Warehouse Services", path: "/warehouse" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 hover:text-sky-400 transition-colors"
                >
                  <ChevronRight size={14} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* OTHER SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">
            OTHER SERVICES
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Insurance Services", path: "/insurance" },
              { name: "Local Shifting", path: "/local" },
              { name: "Car Transportation", path: "/car" },
              { name: "Escorting Services", path: "/escort" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 hover:text-sky-400 transition-colors"
                >
                  <ChevronRight size={14} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK ENQUIRY */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">
            QUICK ENQUIRY
          </h3>
          <p className="text-sm mb-5">
            Get quick assistance for transport, warehouse and relocation services.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-transparent border border-white/30 
                         outline-none text-sm placeholder-gray-400"
            />
            <button className="bg-sky-500 hover:bg-sky-600 px-5 text-white text-sm font-medium transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#09102f] py-4 text-center text-sm text-gray-400">
        © 2025 Prajapati Transport Service. All Rights Reserved.
      </div>
    </footer>
  );
}
