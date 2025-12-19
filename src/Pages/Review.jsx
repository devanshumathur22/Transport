import React from "react";
import { Star, Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Amit Sharma",
      text: "The entire moving process was smooth and well-organized. The team handled everything professionally and delivered on time.",
      rating: 5,
    },
    {
      name: "Priya Verma",
      text: "Very polite staff and excellent packing quality. All my belongings arrived safely without any damage.",
      rating: 4,
    },
    {
      name: "Rahul Singh",
      text: "Affordable pricing with truly professional service. Highly recommended for stress-free relocation.",
      rating: 5,
    },
    {
      name: "Neha Gupta",
      text: "From booking to delivery, everything was transparent and hassle-free. The staff was very supportive.",
      rating: 5,
    },
    {
      name: "Suresh Kumar",
      text: "On-time pickup and safe delivery of my car. Very reliable transport service.",
      rating: 4,
    },
    {
      name: "Anjali Mehta",
      text: "Excellent coordination and careful handling of fragile items. I felt confident throughout the move.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Trusted by Hundreds of Happy Customers
        </h2>
        <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
          Real experiences from customers who trusted us with their household,
          office, and vehicle transportation needs.
        </p>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote className="text-sky-500 mb-4" size={28} />

              <p className="text-gray-600 text-sm leading-relaxed">
                {review.text}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < review.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <h4 className="mt-4 font-semibold text-gray-900">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
