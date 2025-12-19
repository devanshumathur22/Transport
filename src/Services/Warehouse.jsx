export default function Warehouse() {
  return (
    <>
      {/* HERO */}
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <h1 className="text-white text-5xl font-bold drop-shadow-lg">
          Warehouse Services
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">
            Secure Warehouse Services in Ranchi
          </h2>

          <p>
            <strong className="text-sky-600">
              Prajapati Transport Service
            </strong>{" "}
            provides safe and reliable warehouse services in Ranchi for
            household, commercial, and business goods. Our warehousing solutions
            are designed to offer secure storage with proper documentation and
            expert supervision.
          </p>

          <p>
            We ensure that all stored goods are handled carefully and protected
            from damage. Our warehouses are clean, well-organized, and managed
            by trained professionals to maintain safety, accessibility, and
            reliability at all times.
          </p>

          <p>
            Whether you need short-term or long-term storage during relocation,
            our warehouse services offer flexible and cost-effective solutions.
            Safety, reliability, and customer satisfaction are at the core of
            our warehousing facilities.
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
