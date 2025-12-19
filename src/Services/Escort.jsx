export default function Escorting() {
  return (
    <>
      {/* HERO */}
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c')",
        }}
      >
        <h1 className="text-white text-5xl font-bold">
          Escorting Services
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">
            Professional Escorting Services in Ranchi
          </h2>

          <p>
            Prajapati Transport Service provides reliable escorting services to
            ensure safe, monitored, and timely transportation of household and
            commercial goods. Our escorting solutions are designed to give
            customers complete peace of mind throughout the relocation journey.
          </p>

          <p>
            From packing and loading to transportation, unloading, and final
            placement, our trained supervisors oversee the entire moving
            process. With well-maintained vehicles, real-time coordination, and
            experienced staff, we take full responsibility for your belongings
            until safe delivery at the destination.
          </p>
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
