import React from "react";
import hero from "../assets/hero.jpeg";

export default function Relocation() {
  return (
    <section className="py-8 px-4">
      <div className="flex items-start gap-12">

        {/* LEFT IMAGE */}
        <div className="lg:w-2/5 w-full flex justify-start">
          <img
            src={hero}
            alt="Prajapati Transport Service Ranchi"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:w-3/5 w-full">
          <h2 className="text-2xl font-semibold mb-6">
            Prajapati Transport Service – Trusted Packers & Movers in Ranchi
          </h2>

          <p>
            Prajapati Transport Service is one of the leading packers and movers
            in Neuri Vikas, Ranchi, known for providing reliable and professional
            commercial as well as household relocation services. Established in
            2022, we have built a strong reputation for timely delivery, safe
            handling of goods, and customer-focused service.
          </p>
        </div>
      </div>

      <p className="leading-relaxed mt-4">
        We serve customers across Ranchi and nearby cities with a wide range of
        relocation solutions including commercial shifting, household shifting,
        office relocation, vehicle transportation, and loading & unloading
        services. Our experienced team ensures that every move is planned and
        executed smoothly, keeping safety and efficiency as top priorities.
      </p>

      <p className="leading-relaxed mt-4">
        Located at Outer Ring Road, near Sirat Nagar, Neuri Vikas, our office is
        easily accessible for customers. We operate round the clock and are
        always available to assist you with your relocation needs. With a
        customer-first approach, we aim to make every move stress-free and
        hassle-free.
      </p>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              How We Help Customers with Relocation
            </h2>

            <p className="mb-6">
              At Prajapati Transport Service, we follow a structured and
              professional relocation process tailored to customer
              requirements. Our trained staff works with dedication and care to
              ensure smooth movement of goods, whether it is within the city or
              across states.
            </p>

            <h3 className="text-xl mb-3">Our Moving Process:</h3>

            <ul className="space-y-2 mb-4">
              <li>
                Complete packing and moving handled by experienced professionals.
              </li>
              <li>
                Dedicated team focusing on safe handling and timely delivery.
              </li>
              <li>
                Use of quality packing materials to prevent damage during transit.
              </li>
              <li>
                End-to-end responsibility from packing, transportation to unloading.
              </li>
            </ul>

            <p className="mb-4">
              <strong>Available Transport Vehicles:</strong>{" "}
              Tata 407, 608, 709, 1110, LPT, Canter
            </p>

            <h3 className="text-xl mb-2">Our Mission:</h3>

            <p>
              To deliver reliable, safe, and cost-effective relocation services
              while exceeding customer expectations and becoming one of the most
              trusted packers and movers in Ranchi and across India.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
