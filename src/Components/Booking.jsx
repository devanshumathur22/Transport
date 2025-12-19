import { useState } from "react";

export default function Booking() {
  const [tab, setTab] = useState("package");

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Book Your Transport Service
        </h1>
        <div className="w-16 h-1.5 bg-sky-500 mx-auto mb-12"></div>

        {/* TABS */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setTab("package")}
            className={`px-6 py-3 font-semibold rounded-md transition-colors
              ${
                tab === "package"
                  ? "bg-sky-500 text-white"
                  : "bg-white border hover:border-sky-400"
              }`}
          >
            📦 Package Booking
          </button>

          <button
            onClick={() => setTab("vehicle")}
            className={`px-6 py-3 font-semibold rounded-md transition-colors
              ${
                tab === "vehicle"
                  ? "bg-sky-500 text-white"
                  : "bg-white border hover:border-sky-400"
              }`}
          >
            🚗 Vehicle Booking
          </button>
        </div>

        {/* FORM CARD */}
        <form className="bg-white rounded-2xl shadow-sm border p-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* COMMON FIELDS */}
          <input
            className="border border-gray-300 rounded-md px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="Full Name*"
          />
          <input
            className="border border-gray-300 rounded-md px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="Phone Number*"
          />
          <input
            className="border border-gray-300 rounded-md px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="From Location*"
          />
          <input
            className="border border-gray-300 rounded-md px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="To Location*"
          />

          <input
            type="date"
            className="border border-gray-300 rounded-md px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="time"
            className="border border-gray-300 rounded-md px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          {/* PACKAGE BOOKING */}
          {tab === "package" && (
            <>
              <select className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-sky-400">
                <option>Goods Type</option>
                <option>Household</option>
                <option>Office</option>
                <option>Commercial</option>
              </select>

              <select className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-sky-400">
                <option>House Size</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>Office</option>
              </select>

              <select className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-sky-400">
                <option>Packing Required?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <select className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-sky-400">
                <option>Lift Available?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </>
          )}

          {/* VEHICLE BOOKING */}
          {tab === "vehicle" && (
            <>
              <select className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-sky-400">
                <option>Vehicle Type</option>
                <option>Car</option>
                <option>Bike</option>
              </select>

              <select className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-sky-400">
                <option>Car Type (if car)</option>
                <option>Hatchback</option>
                <option>Sedan</option>
                <option>SUV</option>
              </select>

              <input
                className="border border-gray-300 rounded-md px-4 py-3 
                           focus:outline-none focus:ring-2 focus:ring-sky-400 md:col-span-2"
                placeholder="Vehicle Number (optional)"
              />
            </>
          )}

          <textarea
            className="border border-gray-300 rounded-md px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-sky-400 md:col-span-2"
            rows="4"
            placeholder="Additional Notes"
          />

          <div className="md:col-span-2 text-center mt-4">
            <button
              className="bg-sky-500 hover:bg-sky-600 text-white px-14 py-4 
                         rounded-md font-semibold text-lg transition-colors"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
