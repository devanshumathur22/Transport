export default function Packing() {
  return (
    <>
      {/* HERO */}
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wider">
          PACKING AND MOVING
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">
            Professional Packing & Moving Services in Ranchi
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong className="text-sky-600">
              Prajapati Transport Service
            </strong>{" "}
            provides reliable and professional packing and moving services to
            make your relocation simple, safe, and hassle-free. We focus on
            careful packing, secure transportation, and timely delivery at
            affordable prices.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our wide range of services includes household packing and moving,
            office relocation, local shifting, commercial moving, vehicle
            transportation, insurance assistance, and storage solutions. Each
            service is planned according to customer requirements to ensure
            maximum safety and efficiency.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our experienced professionals have successfully handled numerous
            relocations across Ranchi and nearby cities. With proper packing
            materials, trained manpower, and organized procedures, we ensure
            that your belongings reach their destination safely and on time.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our expert team understands the importance of careful packing,
            especially for fragile items, furniture, and valuable goods. From
            loading to unloading, we ensure every item is handled with care and
            delivered without damage, giving you complete peace of mind during
            the relocation process.
          </p>
        </div>

        {/* ENQUIRY */}
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
