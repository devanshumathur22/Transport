export default function Packing() {
  return (
    <>
    
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

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">        
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Packing and Moving</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            We <strong className="text-orange-600">Mahi Packers and Movers</strong>{" "}
            provides packing and moving service for making your shifting
            procedures as simple & convenient as possible. Mahi Packers and
            Movers are fast and credible packing and moving company which
            provides services at affordable prices.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our wide range of services include best packing & moving services,
            office packing and moving services, local shifting services,
            commercial packing and moving services, vehicle shifting services,
            Insurance services, storage services, warehousing services and
            international moving.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our Experts have helped numerous customer from various parts of
            India to shift from their homes or office premises hassle-free. We
            have been providing packing and moving services in Patna,
            Muzaffarpur, Bhagalpur, Gaya, Purnea, Saharsa, Darbhanga, Gopalganj,
            Ara, Buxar, Danapur, Arwal, Biharsarif, Motihari, Chapra, Siwan,
            Bhabhua, Sasaram, Hajipur, Samastipur, Bhojpur, Munger, Katihar,
            Mokama, Bhaktiyarpur, Deoghar, Jhajha and various parts of Bihar for
            many years now.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our Expert team of{" "}
            <strong>Mahi Packers and Movers</strong> understands how carefully the things have to be packed ensuring its safety during a relocation process. e have an Expert teams who is highly trained and are empowered with quality packing and moving services. Mahi Packers and Movers  ensure loading and unloading of your all types of goods, furniture and fragile items are carried out without a single scratch. As part of our various packing and moving services in Patna, Bihar, we provide the following services as well.
          </p>
        </div>
   
        <div className="border p-8">
          <h3 className="text-2xl font-bold mb-3">ENQUIRY</h3>
          <div className="w-14 h-2 bg-sky-500 mb-6"></div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border p-3"/>
            <input
              type="email"
              placeholder="Email*"
              className="w-full border p-3"/>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-3"/>
            <textarea
              rows="5"
              placeholder="Ask your questions..."
              className="w-full border p-3"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-sky-500 text-white py-3 font-semibold hover:bg-sky-600">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
