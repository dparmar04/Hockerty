import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const reviews = [
  {
    name: "Heather Alexander – United Kingdom",
    title: "Excellent customer service",
    text: "Ordered a few items from this company and after a few hiccups my fiance is really pleased with his suit. Customer service is second to none, really helpful and ensured I submitted the correct measurements for a perfect fit.",
  },
  {
    name: "Roberto – Italy",
    title: "Unleash brightness and liveliness",
    text: "One of my favorite looks composed by tailored shirt that I create on Hockerty site, red blood color that can unleash brightness and liveliness.",
  },
  {
    name: "Erick J – United States",
    title: "Incredible work with my suit",
    text: "Absolutely incredible work with my suit! Amazing stuff! Thank you so much! I'm blown away with the precision! Thank you again.",
  },
];
function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="w-full px-4 md:px-16 py-16 bg-white text-black">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-12">
        <h2 className="text-xl font-semibold mb-2 md:mb-0">Reviewed by you</h2>
        <div className="flex items-center gap-2">
          <span className="font-medium">Great</span>
          <img src="/star.svg" alt="trustpilot stars" className="h-5" />
          <span className="text-sm text-gray-600">18,842 reviews on</span>
          <img src="/trustpilot.svg" alt="trustpilot logo" className="h-5" />
        </div>
      </div>

      {/* Reviews */}
      <div className="relative">
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="flex gap-1 text-yellow-400 text-lg">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
              <h3 className="font-semibold">{review.title}</h3>
              <p className="text-sm text-gray-700">{review.text}</p>
              <p className="mt-2 font-medium">{review.name}</p>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative">
            <div className="transition-all duration-500">
              <div className="flex flex-col gap-3">
                <div className="flex gap-1 text-yellow-400 text-lg justify-center">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <h3 className="text-center font-semibold">{reviews[activeIndex].title}</h3>
                <p className="text-sm text-gray-700 text-center">{reviews[activeIndex].text}</p>
                <p className="mt-2 text-center font-medium">{reviews[activeIndex].name}</p>
              </div>

              {/* Arrows */}
              <div className="flex justify-center gap-6 mt-6">
                <button onClick={prev}>
                  <FiChevronLeft className="text-2xl" />
                </button>
                <button onClick={next}>
                  <FiChevronRight className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* See all button */}
      <div className="mt-12 flex justify-center">
        <button className="bg-black text-white font-medium py-2 px-5 rounded-full whitespace-nowrap hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300 cursor-pointer">
          See them all
        </button>
      </div>
    </div>
  );

}

export default Reviews