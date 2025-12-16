import React from "react";
import {
  Package,
  Ship,
  Truck,
  Warehouse,
  BadgeCheck,
  Car,
} from "lucide-react";

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      
      <h2 className="text-3xl font-semibold text-center mb-14">
        Our Salient Features:
      </h2>     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-20 text-gray-700">
        
        <div className="flex gap-5 items-start">
          <Package size={40} className="text-gray-800" />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Dedicated Packing And Moving Team
            </h3>
            <p className="leading-relaxed">
              Dedicated packing and moving team for planning and scheduling of
              shifting services across Bihar and India.
            </p>
          </div>
        </div>
      
        <div className="flex gap-5 items-start">
          <Ship size={40} className="text-gray-800" />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Quality Assurance
            </h3>
            <p className="leading-relaxed">
              Delivery of any freight from a place to another place quickly to
              save your cost and your time.
            </p>
          </div>
        </div>

          <div className="flex gap-5 items-start">
          <Truck size={40} className="text-gray-800" />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Expert Moving Team
            </h3>
            <p className="leading-relaxed">
              Our expert moving team enables us to provide comprehensive and
              cost-effective packers and movers services in Patna and across
              India.
            </p>
          </div>
        </div>
      
        <div className="flex gap-5 items-start">
          <Warehouse size={40} className="text-gray-800" />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Specialized
            </h3>
            <p className="leading-relaxed">
              Specialized in providing packers and movers services for any kind
              of relocation whether it is local, domestic, or International.
            </p>
          </div>
        </div>
      
        <div className="flex gap-5 items-start">
          <BadgeCheck size={40} className="text-gray-800" />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              IBA Approved
            </h3>
            <p className="leading-relaxed">
              Registered and IBA approved packer and mover in Patna.
            </p>
          </div>
        </div>
      
        <div className="flex gap-5 items-start">
          <Car size={40} className="text-gray-800" />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Best Transportation
            </h3>
            <p className="leading-relaxed">
              Best transportation facility to deliver goods on time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
