export default function Loading() {
  return (
    <>
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d')",}}>
        <h1 className="text-white text-5xl font-bold">
          Loading and Unloading
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">Loading and Unloading</h2>

          <p>
            <span className="text-orange-600 font-semibold">
              Mahi Packers and Movers
            </span>{" "}
            We Mahi Packers and Movers  offer extremely reliable and cost effective loading & unloading services to our clients.  Our Expert team use systematic procedure to load and unload items in truck ensuring maximum safety and time efficiency, which ascend us to the position of one of the best Shifting and relocation services in Patna Bihar.

          </p>

          <ul className="list-disc pl-6 space-y-2">
            <h2>
                What we do on our Loading Services :- 
            </h2>
            <li>We arrange packed household goods near the moving vehicle or truck</li>
            <li>Loading of household goods by our expert team & laborious workers</li>
            <li>We do Safely & carefully placement of boxes on the transportation truck</li>
            <li>We arrange all the household goods as per the nature of goods</li>
            <li>We put heavy items or goods at the bottom of the vehicle</li>
            <li>Fasten the boxes and cartons with good quality ropes.</li>
            <li>We Cover entire Household Goods using good quality and waterproof sheets.</li>
          </ul>
        </div>
    
        <div className="border p-8">
          <h3 className="text-2xl font-bold">ENQUIRY</h3>
          <div className="w-14 h-2 bg-sky-500 my-4"></div>
          <form className="space-y-4">
            <input className="w-full border p-3" placeholder="Name*" />
            <input className="w-full border p-3" placeholder="Email*" />
            <input className="w-full border p-3" placeholder="Subject" />
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
