export default function CarTransportation() {
  return (
    <>
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",}}>
        <h1 className="text-white text-5xl font-bold">
          Car Transportation
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">Car Transportation</h2>
          <p>
            Car and Bike Moving services providing speedy hassle-free transportation, we can ensures for safe and scratch-free transportation of car and bike from one place to another place.
Mahi Packers and Movers are the best car and bike transportation company in patna bihar and a trusted brand that listed top most standard quality while bike transportation, vehicle shifting, car shifting service provider in bihar and all major city of India at reasonable rates.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <h2 className="text-2xl">WHAT WE OFFER :-</h2>
            <li>Personalized, Reliable & Punctual Car Carrier Services in Patna Bihar
</li>
            <li>Car Transportation Services at affordable tariffs in Patna Bihar</li>
            <li>Shifting of Car and bike by especially designed car & bike carrier trailers & containerized trucks.</li>
            <li>We ensure for Safe, scratch-free and on-time delivery of cars and bike.</li>
            <li>Careful loading & unloading of cars by our experts to prevent even a minor scratch.</li>
            <li>Personalized assistance on Car and Bike transportation.</li>
          </ul>
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
