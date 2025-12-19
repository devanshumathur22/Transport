export default function Office() {
  return (
    <>
      {/* HERO */}
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
        }}
      >
        <h1 className="text-white text-5xl font-bold">
          Office Shifting
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">
            Office Shifting Services in Ranchi
          </h2>

          <p>
            <strong className="text-sky-600">
              Prajapati Transport Service
            </strong>{" "}
            offers professional and efficient office shifting services in
            Ranchi. Whether you are relocating a small office, a corporate
            workspace, or an entire business unit, we ensure a smooth,
            well-planned, and stress-free shifting experience.
          </p>

          <p>
            Office relocation requires careful handling of furniture, documents,
            IT equipment, and workstations. Our experienced team manages packing,
            loading, transportation, unloading, and setup with minimal downtime
            so your business operations can resume quickly.
          </p>

          <p>
            With reliable transportation, trained staff, and round-the-clock
            support, we provide cost-effective office shifting solutions tailored
            to your requirements. Our commitment to timely delivery and safe
            handling makes us a trusted choice for office relocation services in
            Ranchi and nearby cities.
          </p>
        </div>

        {/* ENQUIRY */}
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
            <input
              className="w-full border p-3"
              placeholder="Subject"
            />
            <textarea
              className="w-full border p-3"
              rows="5"
              placeholder="Ask your questions..."
            />
            <button className="w-full bg-sky-500 text-white py-3 font-semibold">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
