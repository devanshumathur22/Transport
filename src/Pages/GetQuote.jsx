import { useState } from "react";

const WHATSAPP_NUMBER = "918619965763";

export default function GetQuote() {
  const [form, setForm] = useState({
    serviceType: "Package",
    name: "",
    phone: "",
    from: "",
    to: "",
    date: "",
    time: "",
    houseSize: "",
    vehicleType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.phone || !form.from || !form.to || !form.date) {
      alert("Please fill all required fields");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const now = new Date().toLocaleString();

    let text = `
💰 Get A Quote Request

Service Type: ${form.serviceType}

From: ${form.from}
To: ${form.to}
Date: ${form.date}
Time: ${form.time || "Any"}
`;

    if (form.serviceType === "Package") {
      text += `House Size: ${form.houseSize || "Not specified"}\n`;
    } else {
      text += `Vehicle Type: ${form.vehicleType || "Not specified"}\n`;
    }

    text += `
Customer Details:
Name: ${form.name}
Phone: ${form.phone}

Additional Message:
${form.message || "N/A"}

Request Time: ${now}
`;

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(text);

    window.open(url, "_blank");
  };

  return (
    <>
      {/* HERO */}
      <section
        className="h-[45vh] bg-center bg-cover flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative text-white text-4xl md:text-6xl font-bold">
          Get A Quote
        </h1>
      </section>

      {/* FORM */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-3 text-center">
            Request a Price Estimate
          </h2>
          <div className="w-16 h-1.5 bg-sky-500 mx-auto mb-10"></div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm border p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* SERVICE TYPE */}
            <select
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-sky-400 md:col-span-2"
            >
              <option value="Package">📦 Package / Goods Shifting</option>
              <option value="Vehicle">🚗 Vehicle Transportation</option>
            </select>

            <input
              name="name"
              placeholder="Your Name*"
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <input
              name="phone"
              placeholder="Mobile Number*"
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <input
              name="from"
              placeholder="From City*"
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <input
              name="to"
              placeholder="To City*"
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <input
              type="time"
              name="time"
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            {/* CONDITIONAL */}
            {form.serviceType === "Package" && (
              <select
                name="houseSize"
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-3 
                           focus:outline-none focus:ring-2 focus:ring-sky-400 md:col-span-2"
              >
                <option value="">House Size</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>Villa</option>
              </select>
            )}

            {form.serviceType === "Vehicle" && (
              <select
                name="vehicleType"
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-3 
                           focus:outline-none focus:ring-2 focus:ring-sky-400 md:col-span-2"
              >
                <option value="">Vehicle Type</option>
                <option>Car</option>
                <option>Bike</option>
                <option>Small Truck</option>
                <option>Container</option>
              </select>
            )}

            <textarea
              name="message"
              rows="4"
              placeholder="Additional details (optional)"
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-sky-400 md:col-span-2"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-sky-500 hover:bg-sky-600 
                         text-white py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Get Quote on WhatsApp
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
