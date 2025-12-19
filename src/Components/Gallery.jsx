import React, { useState } from "react";
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
import img7 from "../assets/7.jpg"
import img9 from "../assets/9.jpg"
import img10 from "../assets/10.jpg"
import img11 from "../assets/11.jpg"
import img12 from "../assets/12.jpg"
import img14 from "../assets/14.jpg"



export default function GalleryPage() {
  const [activeImg, setActiveImg] = useState(null);

  // ⚠️ Images MUST be inside: public/images/
  const images = [
      img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img9,
    img10,
    img11,
    img12,
    img14,
   
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

        {/* ✅ SAME SIZE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImg(img)}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-lg
                         transform transition-all duration-300
                         hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* FIXED HEIGHT */}
              <div className="w-full h-64 overflow-hidden bg-gray-200">
                <img
                  src={img}
                  alt="Prajapati Transport Service"
                  loading="lazy"
                  className="w-full h-full object-cover
                             transition-transform duration-500
                             hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ✅ LIGHTBOX */}
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

      {/* ✅ INLINE ANIMATION (NO EXTRA FILE) */}
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
