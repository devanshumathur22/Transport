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
      {/* HERO */}
      <section
        className="h-[55vh] bg-center bg-cover flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative text-white text-4xl md:text-6xl font-bold tracking-wider">
          CONTACT US
        </h1>
      </section>

      {/* CONTACT DETAILS */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-3">Contact Details</h2>
          <div className="w-16 h-1.5 bg-sky-500 mb-6"></div>

          <p className="text-gray-600 mb-12 max-w-2xl leading-relaxed">
            Get in touch with Prajapati Transport Service for reliable packing,
            moving, and transportation solutions. Our team is always ready to
            assist you with your relocation requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* ADDRESS */}
            <div className="flex gap-4">
              <MapPin className="text-sky-500 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-1">
                  Visit Our Office
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Outer Ring Road, Near Sirat Nagar,<br />
                  Neuri Vikas, Ranchi – 835217, Jharkhand, India
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex gap-4">
              <Phone className="text-sky-500 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-1">
                  Call Us
                </h4>
                <p className="text-gray-600">
                  Office: +91 9471458067 <br />
                  Support: +91 8877321572
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4">
              <Mail className="text-sky-500 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-1">
                  Email Us
                </h4>
                <p className="text-gray-600">
                  prajapatitransportservice@gmail.com
                </p>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4">
              <Share2 className="text-sky-500 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-3">
                  Connect With Us
                </h4>
                <div className="flex gap-4">
                  <span className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-500 hover:text-white transition">
                    <Facebook size={18} />
                  </span>
                  <span className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-500 hover:text-white transition">
                    <Twitter size={18} />
                  </span>
                  <span className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-500 hover:text-white transition">
                    G+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WORKING HOURS */}
        <div className="bg-white rounded-2xl shadow-sm border p-8 h-fit">
          <h3 className="text-2xl font-bold mb-3">
            Working Hours
          </h3>
          <p className="text-gray-600 mb-6">
            We are available throughout the week to provide prompt and reliable
            relocation support.
          </p>

          <ul className="space-y-4 text-gray-700 text-sm">
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
              <span className="text-sky-500">Available</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">
            Leave Your Message
          </h2>
          <div className="w-16 h-1.5 bg-sky-500 mx-auto mb-6"></div>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
            Have questions or need a quote? Fill out the form below and our team
            will get back to you as soon as possible.
          </p>

          <form className="bg-white rounded-2xl shadow-sm border p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Your Name*"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <input
              type="email"
              placeholder="Email Address*"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <textarea
              placeholder="Your Message..."
              rows="5"
              className="border border-gray-300 rounded-md px-4 py-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 text-white px-14 py-3 rounded-md font-semibold transition-colors"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
