import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "THE ULTIMATE",
    subtitle: "LOGISTIC SOLUTIONS",
    desc: "Dedicated employees working across India to ensure safe, reliable and on-time delivery.",
  },
  {
    image:
      "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "PROVIDING FIRST",
    subtitle: "CLASS FREIGHT SERVICES",
    desc: "Professional packing, secure transport and seamless relocation services nationwide.",
  },
  {
    image:
      "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "AN INDIA LEADING",
    subtitle: "LOGISTIC PROVIDER",
    desc: "Trusted by thousands for household, office and vehicle transportation.",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500); // slow = premium feel
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex(index === 0 ? slides.length - 1 : index - 1);

  const next = () =>
    setIndex(index === slides.length - 1 ? 0 : index + 1);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* IMAGE */}
      <img
        src={slides[index].image}
        alt=""
        className="w-full h-full object-cover transition-transform duration-500 scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-white">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          {slides[index].title}
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-sky-400">
          {slides[index].subtitle}
        </h2>

        <p className="max-w-xl mt-6 text-base md:text-lg opacity-90 leading-relaxed">
          {slides[index].desc}
        </p>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="/get-quote"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-md font-semibold transition-colors"
          >
            Get A Quote
          </a>
        </div>
      </div>

      {/* CONTROLS */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full text-white transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full text-white transition"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
