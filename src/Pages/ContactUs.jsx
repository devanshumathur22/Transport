import {
  MapPin,
  Phone,
  Mail,
  Share2,
  Facebook,
  Twitter,
} from "lucide-react";

export default function ContactUs() {
  return (
    <>
    <section
  className="h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')",}}>
  <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wider">
    CONTACT US
  </h1>
</section>
    
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">            
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-3">CONTACT DETAILS</h2>
          <div className="w-16 h-2 bg-sky-500 mb-6"></div>
          <p className="text-gray-600 mb-10 max-w-2xl">
            If you have any questions about what we offer for consumers or for
            business, you can always email us or call us via the below details.
            We’ll reply within 24 hours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">   

            <div className="flex gap-4">
              <MapPin className="text-sky-500" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Visit our office</h4>
                <p className="text-gray-600">
                  New Janganpura, Ramkrishna Nagar, Patna 800027, India
                </p>
              </div>
            </div>
          
            <div className="flex gap-4">
              <Phone className="text-sky-500" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Call us on</h4>
                <p className="text-gray-600">
                  Office: +91 9471458067 & +91 8877321572 <br />
                  Customer Care: +91 9471458066
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-sky-500" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Mail us at</h4>
                <p className="text-gray-600">
                  mahipackersandmovers.in@gmail.com
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Share2 className="text-sky-500" />
              <div>
                <h4 className="font-semibold text-lg mb-2">We are social</h4>
                <div className="flex gap-4">
                  <span className="w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer">
                    <Facebook size={18} />
                  </span>
                  <span className="w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer">
                    <Twitter size={18} />
                  </span>
                  <span className="w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer">
                    G+
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      
        <div className="border p-8">
          <h3 className="text-2xl font-bold mb-3">WORKING HOURS</h3>
          <p className="text-gray-600 mb-6">
            Pleasure and praising pain was born and will give you a complete
            happiness.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex justify-between ">
              <span>Monday</span>
              <span>08:00 am – 18.00 pm</span>
            </li>
            <li className="flex justify-between">
              <span>Tuesday</span>
              <span>08:00 am – 18.00 pm</span>
            </li>
            <li className="flex justify-between ">
              <span>Wednesday</span>
              <span>08:00 am – 18.00 pm</span>
            </li>
            <li className="flex justify-between ">
              <span>Thurs & Friday</span>
              <span>08:00 am – 18.00 pm</span>
            </li>
            <li className="flex justify-between ">
              <span>Sat & Sunday</span>
              <span>10:00 am – 18.00 pm</span>
            </li>
          </ul>
        </div>
      </section>
    
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">
            LEAVE YOUR MESSAGE
          </h2>
          <div className="w-16 h-2 bg-sky-500 mx-auto mb-6"></div>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            If you have any questions about the services we provide simply use
            the form below. We try and respond to all queries within 24 hours.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Your Name*"
              className="border p-4"/>
            <textarea
              placeholder="Your Message..."
              rows="6"
              className="border p-4 md:row-span-3">                
              </textarea>

            <input
              type="email"
              placeholder="Email Address*"
              className="border p-4"/>
            <input
              type="text"
              placeholder="Phone"
              className="border p-4"/>

            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-sky-500 text-white px-12 py-3 font-semibold hover:bg-sky-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
