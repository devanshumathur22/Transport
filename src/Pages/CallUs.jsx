import { useState } from "react";

const WHATSAPP_NUMBER = "918619965763";

export default function CallUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    from: "",
    to: "",
    type: "Package", // Package | Vehicle
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, phone, from, to, type } = form;

    // ✅ Validation
    if (!name || !phone || !from || !to) {
      alert("Please fill all required fields");
      return;
    }

    // ✅ Auto date & time
    const now = new Date().toLocaleString();

    // ✅ WhatsApp Message
    const message = `
📞 Call Back Request

Service Type: ${type}

Name: ${name}
Phone: ${phone}

From: ${from}
To: ${to}

Request Time: ${now}
`;

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message);

    window.open(url, "_blank");
  };

  return (
    <div className="w-full bg-blue-950 py-10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold text-white">CALL US</h2>
          <p className="text-sky-400 mt-3 font-semibold">
            9471458067, 8877321572, 9471458066
          </p>
        </div>

        {/* FORM */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* SERVICE TYPE */}
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="p-2 rounded bg-white outline-none"
          >
            <option value="Package">📦 Package / Goods</option>
            <option value="Vehicle">🚗 Vehicle Transport</option>
          </select>

          <input
            name="name"
            placeholder="Name*"
            onChange={handleChange}
            className="p-2 rounded bg-white outline-none"
          />

          <input
            name="phone"
            placeholder="Mobile No.*"
            onChange={handleChange}
            className="p-2 rounded bg-white outline-none"
          />

          <input
            name="email"
            placeholder="Email Id"
            onChange={handleChange}
            className="p-2 rounded bg-white outline-none"
          />

          <input
            name="from"
            placeholder="From city*"
            onChange={handleChange}
            className="p-2 rounded bg-white outline-none"
          />

          <input
            name="to"
            placeholder="To city*"
            onChange={handleChange}
            className="p-2 rounded bg-white outline-none"
          />

          <button
            onClick={handleSubmit}
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
