import { MapPin } from "lucide-react";

export default function Branches() {
  return (
    <>
      {/* HERO */}
      <section
        className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')",
        }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wider">
          BRANCHES
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* BRANCH LIST */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-3">Our Branch Locations</h2>
          <div className="w-16 h-1 bg-sky-500 mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* HEAD OFFICE */}
            <div className="flex gap-4">
              <MapPin className="text-sky-500" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Head Office – Ranchi
                </h3>
                <p className="leading-relaxed">
                  Outer Ring Road, Near Sirat Nagar,  
                  Neuri Vikas, Ranchi – 835217, Jharkhand, India
                </p>
              </div>
            </div>

            {/* SERVICE AREA */}
            <div className="flex gap-4">
              <MapPin className="text-sky-500" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Service Coverage
                </h3>
                <p className="leading-relaxed">
                  Ranchi City, Neuri Vikas, Outer Ring Road,  
                  and nearby areas across Jharkhand
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* WORKING HOURS */}
        <div className="border p-8">
          <h3 className="text-2xl font-bold mb-3">
            Working Hours
          </h3>
          <p className="mb-6">
            Our team is available throughout the week to assist you with packing,
            moving, and transportation services.
          </p>

          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Monday – Friday</span>
              <span>08:00 AM – 08:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>09:00 AM – 07:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>10:00 AM – 06:00 PM</span>
            </li>
            <li className="flex justify-between font-semibold">
              <span>Emergency Support</span>
              <span>Available</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
