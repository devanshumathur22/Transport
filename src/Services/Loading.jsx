export default function Loading() {
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
          Loading and Unloading
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">
            Professional Loading & Unloading Services in Ranchi
          </h2>

          <p>
            <strong className="text-sky-600">
              Prajapati Transport Service
            </strong>{" "}
            provides safe, reliable, and cost-effective loading and unloading
            services in Ranchi and nearby areas. Our trained staff follows a
            systematic process to ensure proper handling of goods with maximum
            safety and efficiency during relocation.
          </p>

          <p>
            From small household items to heavy furniture and commercial goods,
            we ensure careful placement and secure handling to prevent any
            damage during transit. Our professional approach and experienced
            workforce make us a trusted choice for loading and unloading
            services.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <h2 className="text-xl font-semibold mt-4">
              What We Do During Loading Services:
            </h2>
            <li>
              Arrange packed household goods near the transport vehicle for
              smooth loading.
            </li>
            <li>
              Loading of goods by trained professionals using proper techniques.
            </li>
            <li>
              Careful placement of boxes and cartons inside the truck.
            </li>
            <li>
              Arrangement of goods based on size, weight, and nature of items.
            </li>
            <li>
              Placement of heavy items at the bottom to ensure stability.
            </li>
            <li>
              Securing cartons using high-quality ropes and fasteners.
            </li>
            <li>
              Covering goods with waterproof sheets for additional protection.
            </li>
          </ul>
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
