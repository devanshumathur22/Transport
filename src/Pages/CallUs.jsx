export default function CallUs() {
  return (
    <div className="w-full bg-blue-950 py-10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">       
      
        <div>
          <h2 className="text-3xl font-bold text-white">CALL US</h2>
          <p className="text-sky-400 mt-3 font-semibold">
            9471458067, 8877321572, 9471458066
          </p>
        </div>  
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 rounded bg-white outline-none"/>
          <input
            type="text"
            placeholder="Mobile No."
            className="p-2 rounded bg-white outline-none"/>
          <input
            type="email"
            placeholder="Email Id"
            className="p-2 rounded bg-white outline-none"/>

          <input
            type="text"
            placeholder="From city"
            className="p-2 rounded bg-white outline-none"/>
          <input
            type="text"
            placeholder="To city"
            className="p-2 rounded bg-white outline-none"/>
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
