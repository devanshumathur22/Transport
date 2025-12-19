export default function Insurance() {
  return (
    <>
      {/* HERO */}
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4386379/pexels-photo-4386379.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <h1 className="text-white text-5xl font-bold drop-shadow-lg">
          Insurance Services
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">
            Insurance Services for Safe Relocation
          </h2>

          <p>
            Prajapati Transport Service offers reliable insurance support to
            safeguard your household and commercial goods during relocation.
            We understand that even with careful handling, unforeseen incidents
            can occur during transit, which is why insurance coverage provides
            complete peace of mind.
          </p>

          <p>
            Our insurance assistance ensures protection for your belongings
            from the time they are loaded until safe delivery and unloading at
            the destination. This allows you to focus on other important
            aspects of your move without unnecessary stress.
          </p>

          <p>
            To match different relocation needs and budgets, we offer the
            following insurance coverage options:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Transit Insurance Policy:</strong>  
              Covers damages caused due to road accidents during transportation.
            </li>
            <li>
              <strong>Comprehensive Insurance Policy:</strong>  
              Covers damages resulting from accidents, handling, and transit of
              household or commercial goods.
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
