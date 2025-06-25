import { useEffect, useState } from "react";

const featuredItems = [
  {
    name: "Esquire",
    logo: "/esquire.jpg",
    content:
      '"With its design system, you can fully customize your shoes, getting super original or classic pieces, as you wish, in a super intuitive way."',
  },
  {
    name: "GQ",
    logo: "/gq.jpg",
    content:
      '"These made-to-measure, customizable, and sustainable jeans are the investment you should make now to always enjoy."',
  },
  {
    name: "Forbes",
    logo: "/forbes.jpg",
    content:
      '"Hockerty: The Made-To-Measure Clothing That is Accessible To All"',
  },
];

function FeaturedIn() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      triggerNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const triggerNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
      setAnimating(false);
    }, 400);
  };

  const handleClick = (index) => {
    if (index !== activeIndex) {
      setAnimating(true);
      setTimeout(() => {
        setActiveIndex(index);
        setAnimating(false);
      }, 400);
    }
  };

  return (
    <div className="w-full text-center py-12 px-4 sm:px-6 md:px-10 bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">Featured in</h2>

      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mb-10">
        {featuredItems.map((item, index) => (
          <img
            key={item.name}
            src={item.logo}
            alt={item.name}
            onClick={() => handleClick(index)}
            className={`h-8 sm:h-10 cursor-pointer transition-all duration-300 ${activeIndex === index
              ? "opacity-100 grayscale-0 scale-105"
              : "opacity-40 grayscale"
              }`}
          />
        ))}
      </div>

      {/* Sliding Content */}
      <div className="relative min-h-[80px] sm:min-h-[100px] overflow-hidden">
        <div
          className={`absolute w-full transition-all duration-500 ease-in-out px-4 ${animating ? "-translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
        >
          <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg italic">
            {featuredItems[activeIndex].content}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <span className="block bg-gray-200 h-[1px] w-[90%] mx-auto"></span>
      </div>
    </div>
  );
}

export default FeaturedIn;
