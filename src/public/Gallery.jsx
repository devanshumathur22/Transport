import React, { useState } from "react";
// import img from ""

export default function GalleryPage() {
  const [activeImg, setActiveImg] = useState(null);

  const images = [
    "/public/1.jpg",
    "/public/10.jpg",
    "/public/11.jpg",
    "/public/12.jpg",
    "/public/14.jpg",
    "/public/2.jpg",
    "/public/3.jpg",
    "/public/4.jpg",
    "/public/5.jpg",
    "/public6.jpg",
    "/public/7.jpg",
    "/public/9.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0b1240]">
          Our Gallery
        </h1>
        <p className="text-center text-gray-600 mt-3 mb-12">
          Real Transport • Real Packers • All India Service
        </p>

        {/* 🔥 EQUAL SIZE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImg(img)}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg
                         transform transition-all duration-300
                         hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* FIXED HEIGHT */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={img}
                  alt="Prajapati Transport Service"
                  className="w-full h-full object-cover
                             transition-transform duration-500
                             group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
        {activeImg && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
            onClick={() => setActiveImg(null)}
          >
            <img
              src={activeImg}
              alt=""
              className="max-w-[90vw] max-h-[90vh] rounded-xl animate-zoomIn"
            />
          </div>
        )}
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes zoomIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-zoomIn {
          animation: zoomIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
