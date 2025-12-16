import React from "react";
import hero from "../assets/hero.jpeg";

export default function Relocation() {
  return (
    <section className="py-8 px-4">
      <div className="flex items-start gap-12">

       
        <div className="lg:w-2/5 w-full flex justify-start">
          <img
            src={hero}
            alt="Packers and Movers"
            className="w-full h-auto object-cover"/>
        </div>
        
        <div className="lg:w-3/5 w-full">
          <h2 className="text-2xl font-semibold mb-6">
            The Best Packers and Movers in Patna, Bihar
          </h2>

          <p className=" ">
           Mahi Packers and Movers, was started by 'Mr.Manish Kumar Singh' in the year 2018. We are the Patna best packers and movers provide professional packing and moving services, shifting services, bike transportation, car transportation, household goods shifting, office shifting, corporate shifting and relocation services throughout Bihar and All India at reasonable prices. We have team of experienced, courteous and careful employees. We are known as the reputed packers and movers in Patna for any kind of relocation whether it is local, domestic, or International. The blend of expert hands enables us to provide comprehensive and cost-effective relocation services to the customers. We pack the goods with quality packaging material like wooden boxes to protect them from scratches and damages. Moreover, we provide local shifting services in Boring Road, Bailey Road, Anisabad, Kankarbagh, Frazer Road, Mithapur, Agaum Kaun and many more places in Patna.
          </p> 
      </div>
      </div>
        <p className="leading-relaxed mt-4">
           Each of the members of our team have more than 10+ years experience in providing quality movers and packers services all over Bihar. Our team members assist from forecasting relocation, delivering your valuable belongings to your destination. We assure customers to provide the best packing and moving services with the utmost care without any single damage to your belongings. As we have a large distribution of network, Mahi Packers and Movers are the most reliable and convenient packers and movers Patna. We are equipped with IBA approved transportation facility to deliver your goods safely on time. We work towards reaching maximum clients satisfaction. Being one of the top 10 movers and packers Patna, we have established ourselves as a trusted shifting company and have been serving customers all over India.
          </p>

      <p className=" leading-relaxed mt-4">
           Once you hire us, you will never prefer others. We assist and support you in every moment during shifting. We are easily reachable at anytime. Just give us a phone call, our team members will reach your doorstep.
          </p>     


    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">      
        <div>
          <h2 className="text-2xl font-bold mb-4">
            How we help customers in Relocating?
          </h2>

          <p className="mb-6">
            We have excellent relocation strategies and our strategies are
            suitable and fit according to the user’s requirement. We have
            experienced relocation team to provide you the customized shifting
            services anywhere as per your wish. We work with ethic and dedication
            and have resulted in a high demand of movers packers services in
            Patna, Bihar.
          </p>

          <h3 className="text-xl mb-3">
            Our Moving Process:
          </h3>

          <ul className=" space-y-2 mb-4">
            <li>
              Our team perform the entire packing and moving tasks and save time.
            </li>
            <li>
              We have dedicated packers movers team and they concentrate on their regular duties.
            </li>
            <li>
              We pack the items in such a way it does not get damaged.
            </li>
            <li>
              From packing to unpacking, we take complete responsibility.
              We know how to accomplish that is even the transportation of goods
              and arranging of goods in the new place.
            </li>
          </ul>

          <p className="mb-4">
            <strong>Available Transports:</strong>{" "}
            Tata 407, 608, 709, 1110, LPT, Canter
          </p>

          <h3 className="text-xl  mb-2">
            Our Mission:
          </h3>

          <p className="">
            To exceed customer’s expectation in the movement of their valued
            goods across the country and be the best packers and movers company
            in India.
          </p>
        </div>       
        <div>
          <h2 className="text-2xl mb-4">
            Packing and Moving Charges:
          </h2>

          <table className="w-full border border-gray-400 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-400 p-2 text-left">
                  Local Shifting (Within City)
                </th>
                <th className="border border-gray-400 p-2">
                  Charges (Approx)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-2">1BHK House Shifting</td><td className="border p-2">Rs 2800 to 4900</td></tr>
              <tr><td className="border p-2">2BHK Home Shifting</td><td className="border p-2">Rs 4800 to 6900</td></tr>
              <tr><td className="border p-2">3BHK Home Shifting</td><td className="border p-2">Rs 7600 to 12800</td></tr>
            </tbody>

            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2 text-left">
                  Domestic Shifting (Outside Patna)
                </th>
                <th className="border p-2">
                  Charges (Approx)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-2">1BHK House Shifting</td><td className="border p-2">Rs 6000 to 18000</td></tr>
              <tr><td className="border p-2">2BHK Home Shifting</td><td className="border p-2">Rs 8000 to 21600</td></tr>
              <tr><td className="border p-2">3BHK Home Shifting</td><td className="border p-2">Rs 11800 to 24400</td></tr>
              <tr><td className="border p-2">4BHK House Shifting</td><td className="border p-2">Rs 12800 to 28600</td></tr>
              <tr><td className="border p-2">Car Transportation</td><td className="border p-2">Rs 8900 to 22600</td></tr>
              <tr><td className="border p-2">Bike Transportation</td><td className="border p-2">Rs 3500 to 6900</td></tr>
              <tr><td className="border p-2">Office Shifting (Complete)</td><td className="border p-2">Rs 4200 to 32000</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>       
    </section>
  );
}
