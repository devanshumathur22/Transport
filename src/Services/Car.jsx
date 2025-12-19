export default function CarTransportation() {
  return (
    <>
      {/* HERO */}
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
        }}
      >
        <h1 className="text-white text-5xl font-bold">
          Car Transportation
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">
            Car & Bike Transportation Services in Ranchi
          </h2>

          <p>
            Prajapati Transport Service provides safe, reliable, and hassle-free
            car and bike transportation services in Ranchi and across India. We
            ensure secure handling and scratch-free delivery of your vehicles
            using well-equipped carriers and trained professionals.
          </p>

          <p>
            With a strong focus on safety and timely delivery, our vehicle
            transportation services are trusted by customers for both local and
            long-distance relocation. We use specially designed car carriers and
            containerized trucks to protect your vehicle throughout the journey.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <h2 className="text-2xl font-semibold mt-4">
              What We Offer:
            </h2>

            <li>
              Reliable and punctual car & bike transportation services in Ranchi.
            </li>
            <li>
              Affordable vehicle shifting solutions with transparent pricing.
            </li>
            <li>
              Transportation using specially designed car and bike carriers.
            </li>
            <li>
              Safe, secure, and scratch-free delivery assurance.
            </li>
            <li>
              Careful loading and unloading handled by trained experts.
            </li>
            <li>
              Personalized assistance throughout the vehicle shifting process.
            </li>
          </ul>
        </div>

        {/* ENQUIRY FORM */}
        <div className="border p-8">
          <h3 className="text-2xl font-bold">
            ENQUIRY
          </h3>
          <div className="w-14 h-2 bg-sky-500 my-4"></div>

          <form className="space-y-4">
            <input
              className="w-full border p-3"
              placeholder="Name*"
            />
            <input
              className="w-full border p-3"
              placeholder="Email*"
            />
            <textarea
              className="w-full border p-3"
              rows="5"
              placeholder="Your Message"
            />
            <button className="w-full bg-sky-500 text-white py-3">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
