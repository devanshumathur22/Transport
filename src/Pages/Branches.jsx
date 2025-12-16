import { MapPin } from "lucide-react";

export default function Branches() {
  return (
    <>
      
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')", }} >
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wider">
          BRANCHES
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">      
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-3">OUR BRANCHES</h2>
          <div className="w-16 h-1 bg-sky-500 mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">            
            
            <div className="flex gap-4">
              <MapPin className="text-sky-500" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Head Office</h3>
                <p className=" leading-relaxed">
                  New Bypass, Ashok Nagar, Changan Road(8A),
                  Kankarbagh, Patna 800020, India
                </p>
              </div>
            </div>        
            <div className="flex gap-4">
              <MapPin className="text-sky-500" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Ranchi Branch</h3>
                <p className="leading-relaxed">
                  Main Bypass, Buti More Ranchi 834001, India
                </p>
              </div>
            </div>

          </div>
        </div>
        
        <div className="border p-8">
          <h3 className="text-2xl font-bold mb-3">
            Every Branches Working Hours
          </h3>
          <p className=" mb-6">
            Pleasure and praising pain was born and will give you a complete
            happiness.
          </p>
          <ul className="space-y-4 ">
            <li className="flex justify-between ">
              <span>Monday</span>
              <span>08:00 am – 18.00 pm</span>
            </li>
            <li className="flex justify-between ">
              <span>Tuesday</span>
              <span>08:00 am – 18.00 pm</span>
            </li>
            <li className="flex justify-between ">
              <span>Wednesday</span>
              <span>08:00 am – 18.00 pm</span>
            </li>
            <li className="flex justify-between">
              <span>Thurs & Friday</span>
              <span>08:00 am – 18.00 pm</span>
            </li>
            <li className="flex justify-between">
              <span>Sat & Sunday</span>
              <span>10:00 am – 18.00 pm</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
