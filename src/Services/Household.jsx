export default function Household() {
  return (
    <>
      {/* PARALLAX HEADER */}
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wider">
          HOUSEHOLD GOODS SHIFTING
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">
            Household Goods Shifting Services in Ranchi
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong className="text-sky-600">
              Prajapati Transport Service
            </strong>{" "}
            provides reliable and professional household goods shifting services
            in Ranchi and nearby areas. We ensure safe packing, careful handling,
            and timely delivery of all your household belongings.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our team uses high-quality packing materials such as bubble wrap,
            corrugated sheets, and protective covers to safeguard fragile and
            valuable items. For delicate or high-value goods, we also offer
            customized wooden crate packing to prevent any damage during transit.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
            Household Goods Shifting from Ranchi to All Over India
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We provide complete door-to-door household relocation services,
            including packing, loading, transportation, unloading, unpacking,
            and arrangement at your new location. Our services also include car
            and bike relocation, insurance assistance, and storage solutions
            when required.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With experienced professionals and a customer-focused approach, we
            take care of every aspect of your home relocation so you can move
            stress-free. Contact us today to plan a smooth and secure household
            shifting experience.
          </p>
        </div>

        {/* ENQUIRY FORM */}
        <div className="border p-8">
          <h3 className="text-2xl font-bold mb-3">
            ENQUIRY
          </h3>
          <div className="w-14 h-2 bg-sky-500 mb-6"></div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border p-3"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border p-3"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-3"
            />
            <textarea
              rows="5"
              placeholder="Ask your questions..."
              className="w-full border p-3"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-sky-500 text-white py-3 font-semibold hover:bg-sky-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
