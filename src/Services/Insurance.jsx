export default function Insurance() {
  return (
    <>
  <section
  className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/4386379/pexels-photo-4386379.jpeg?auto=compress&cs=tinysrgb&w=1600')",}}
>
  <h1 className="text-white text-5xl font-bold drop-shadow-lg">
    Insurance Services
  </h1>
</section>
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">Insurance Services</h2>
          <p>
            Now a days, you will be relieved to know that Mahi Packers and Movers  will provide an insurance policy while getting your household/ corporate possessions drive off to your new home. Till the time the truck reaches the destination safely and all the items are unpacked, there is a constant thought in your mind regarding the well being of your belongings. And we at Mahi Packers and Movers   really understand all this, as we know that in spite of all the precautions taken, some untoward incidents can happen and they can impact the transit merchandise.
          </p>

          <p>
           Therefore Mahi Packers and Movers  offer insurance for your household/ corporate goods. This takes stress out of your moving and packing tasks and allows you to focus your energy and time on other important matters during relocation.
          </p>
          <p>
            This packing moving protection is available to you at very competitive rates. To suit your packing moving budget we offer protection policies:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Transit packing moving policy: This covers damages occurring due to road accident.</li>
            <li>Comprehensive packing moving policy: This includes damages resulting from accidents and handling of household goods.</li>
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
