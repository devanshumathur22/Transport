export default function Office() {
  return (
    <>
      
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",}}>
        <h1 className="text-white text-5xl font-bold">Office Shifting</h1>
      </section>
   
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">        
        <div className="lg:col-span-2 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">Office Shifting</h2>
          <p>
            <span className="text-orange-600 font-semibold">
              Mahi Packers and Movers
            </span>{" "}
             Whether it is Shifting a small office or an entire division, the process of office shfting is difficult, time consuming and stressful. With our expert team involvement, the same process can become quick, easy and of course, Hassle-free.
          </p>
          <br />
          <p>
            Mahi Packers and Movers  ;does not believe in delivering dialogues but delivering service at its best quality. Our expertise in packing, moving,car & bike transportation, loading and unloading serivces, storage & warehousing, etc enables you as an individual or businesses relocate at affordable price for office shifting in patna bihar. We take care of all your requirements with a skilled and experienced team as the leading office shifting company in Patna. Being the leader, we make sure that all your shifting requirements are fulfilled here at Mahi Packers and Movers. We also provide a 24*7 open call support to all our clients. We are at your doorsteps to take your relocation and make it happen with zero hassles and tensionless for you as a customer of Patna Bihar and all major city of India.
          </p>          
        </div>
      
        <div className="border p-8">
          <h3 className="text-2xl font-bold">ENQUIRY</h3>
          <div className="w-14 h-2 bg-sky-500 my-4"></div>

          <form className="space-y-4">
            <input className="w-full border p-3" placeholder="Name*" />
            <input className="w-full border p-3" placeholder="Email*" />
            <input className="w-full border p-3" placeholder="Subject" />
            <textarea
              className="w-full border p-3"
              rows="5"
              placeholder="Ask your questions..."/>
            <button className="w-full bg-sky-500 text-white py-3 font-semibold">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
