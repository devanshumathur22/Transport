export default function LocalShifting() {
  return (
    <>
      {/* HERO */}
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d')",
        }}
      >
        <h1 className="text-white text-5xl font-bold">
          Local Shifting Services
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">
            Local Shifting Services in Ranchi
          </h2>

          <p>
            <strong className="text-sky-600">
              Prajapati Transport Service
            </strong>{" "}
            provides reliable and hassle-free local shifting services in Ranchi.
            We help customers move their household or office belongings safely
            from one location to another within the city with complete care and
            professionalism.
          </p>

          <p>
            Our local shifting services include household relocation, office
            shifting, corporate moves, and vehicle transportation. With trained
            professionals and proper packing techniques, we ensure that your
            goods remain safe and damage-free during the entire relocation
            process.
          </p>

          <p>
            Local shifting requires careful planning and expert handling to
            avoid damage or loss. Our experienced team follows a systematic
            approach to packing, loading, transportation, and unloading,
            ensuring a smooth and stress-free local relocation experience in
            Ranchi and nearby areas.
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
