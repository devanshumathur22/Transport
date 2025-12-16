import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "THE ULTIMATE",
    subtitle: "LOGISTIC SOLUTIONS",
    desc: "Dedicated employees, working in multiple region across the india, deliver operational",
  },
  {
    image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "PROVIDING FIRST",
    subtitle: "CLASS FREIGHT SERVICES",
    desc: "Dedicated employees, working in multiple region across the india, deliver operational",
  },
  {
    image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1600",

    title: "AN INDIA LEAD",
    subtitle: "LOGISTIC PROVIDER",
    desc: "Dedicated employees, working in multiple region across the india, deliver operational",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  const next = () =>
    setIndex(index === slides.length - 1 ? 0 : index + 1);

  return (
    <div className="relative w-full h-96  overflow-hidden">
      <img
        src={slides[index].image}
        className="w-full h-full object-cover"
        alt=""/>

     
      <div className="absolute inset-0 bg-black/50"></div>      
      <div className="absolute inset-0 flex flex-col justify-center px-20 text-white">
        <h1 className="text-4xl font-bold">{slides[index].title}</h1>
        <h2 className="text-3xl font-bold mt-3">
          {slides[index].subtitle}
        </h2>
        <p className="max-w-xl mt-6 text-lg opacity-90">
          {slides[index].desc}
        </p>
      </div>    
      <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full text-white">
        <ChevronLeft />
      </button>
      <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full text-white">
        <ChevronRight />
      </button>
    </div>
  );
}
