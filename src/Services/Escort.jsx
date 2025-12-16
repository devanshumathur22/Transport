export default function Escorting() {
  return (
    <>
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c')",}}>
        <h1 className="text-white text-5xl font-bold">Escorting</h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">Escorting Services</h2>
          <p>
           Relocators of the household goods provide safe door-to-door delivery facility. The delivery process involves the entire process of packing, loading, transporting, unloading and unpacking of the household items, at the final destination itself. <br />

All the rooms are vacated and accordingly packed. With the well maintained fleet of vehicles for transportation, advanced communication system and latest value added services, the entire responsibility is on the service providers.
          </p>
        </div>

        <div className="border p-8">
          <h3 className="text-2xl font-bold">ENQUIRY</h3>
          <div className="w-14 h-2 bg-sky-500 my-4"></div>
          <form className="space-y-4">
            <input className="w-full border p-3" placeholder="Name*" />
            <input className="w-full border p-3" placeholder="Email*" />
            <textarea className="w-full border p-3" rows="5" />
            <button className="w-full bg-sky-500 text-white py-3">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
