export default function Household() {
  return (
    <>
      {/* PARALLAX HEADER */}
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')", }}>
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wider">
          HOUSEHOLD GOODS SHIFTING
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">       
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">
            Household Goods Shifting
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            We <strong className="text-orange-600">Mahi Packers and Movers</strong>{" "}
            are the best household goods packing and moving service provider
            company in Bihar. We offer varieties in household goods packing &
            material moving services. We use finest covering material to protect
            household goods like tape and bubble wrap for fragile items.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            If needed we also offer custom wood crating for breakable items such
            as glassware and showcase items.{" "}
            <strong>Mahi Packers and Movers</strong> offers personal care and
            attention in each and every good during home shifting.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
            Household Goods Shifting from Bihar to all over India!
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We provide door to door household goods shifting services. We do
            home shifting services like packing, moving, loading, unloading,
            unpacking, car and bike relocation services, insurance,
            warehousing services, office shifting and industrial shifting.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Keep faith in the services you need. Our expert team takes care of
            every aspect of your removal so there is no need to worry. Make a
            call today to see what we can do for you.
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
              className="w-full border p-3"></textarea>

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
