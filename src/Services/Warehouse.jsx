export default function Warehouse() {
  return (
    <>
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


      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">Warehouse Services</h2>
          <p>
           We Mahi Packers and Movers  provide various warehousing services at affordable prices. Requirements such as proper documentation work along with expert consultation are provided to every individual as per their needs. Our professionals ensure all warehouse goods and products are perfectly stored so that they don't get damaged. Mahi Packers and Movers is known for its extremely dedicated warehousing facilities services which include several features. Safety and Reliability are central to all our services.
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
