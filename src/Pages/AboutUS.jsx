import hero from "../assets/hero.jpeg";

export default function AboutUs() {
  return (
    <>
      {/* HERO BANNER */}
      <section
        className="h-80 bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <h1 className="text-white text-4xl md:text-3xl font-bold tracking-wider">
          ABOUT US
        </h1>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* IMAGE */}
        <div>
          <img
            src={hero}
            alt="Prajapati Transport Service Ranchi"
            className="w-2xl h-72 object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Prajapati Transport Service</h2>
          <div className="w-16 h-1 bg-sky-500 mb-6"></div>

          <p className="mb-4">
            <strong>Prajapati Transport Service</strong> is a trusted name in
            packers and movers services based in Neuri Vikas, Ranchi. Established
            in 2022, we specialize in commercial and household relocation with a
            strong focus on safety, reliability, and timely delivery.
          </p>

          <p className="mb-4">
            We provide end-to-end packing, moving, loading, unloading, and
            transportation services using high-quality packing materials and
            well-maintained transport vehicles. Our trained and courteous staff
            ensures that every item is handled with utmost care throughout the
            relocation process.
          </p>

          <p className="mb-6">
            With a customer-first approach, Prajapati Transport Service has
            earned the trust of clients across Ranchi and nearby regions. Our
            commitment to professionalism and transparent service makes us a
            preferred choice for stress-free relocation.
          </p>

          {/* SERVICES */}
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Commercial & Household Packing Services</li>
            <li>Door-to-Door Loading and Unloading</li>
            <li>Office and Business Relocation</li>
            <li>Vehicle Transportation (Car & Bike)</li>
            <li>Local and Domestic Shifting</li>
            <li>Secure Transportation Services</li>
            <li>Escort & Supervised Moving Services</li>
            <li>Insurance Assistance (on request)</li>
          </ul>

          {/* PACKING TYPES */}
          <h3 className="text-xl font-semibold mb-4 mt-6">Types of Packing We Use</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Lamination Packing:</strong>  
              Goods are first wrapped with polythene, followed by bubble wrap
              and corrugated sheets, and finally secured using stretch film.
              <br />
              <span className="text-sm text-gray-600">
                Materials used: Polythene, bubble wrap, corrugated sheets,
                stretch film, thermocol.
              </span>
            </li>

            <li>
              <strong>Wooden Crate Packing:</strong>  
              For fragile and high-value items, we provide wooden crate packing
              after lamination, designed according to the shape and weight of
              the goods by skilled carpenters.
              <br />
              <span className="text-sm text-gray-600">
                Materials used: Polythene, corrugated sheets, stretch film,
                quality wooden frames.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
