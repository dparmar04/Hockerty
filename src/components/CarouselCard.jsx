import React, { useState } from "react";

const CarouselCard = ({ image, hoverImage, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[400px] bg-gray-100 overflow-hidden rounded">
        {/* Base image */}
        <img
          src={image}
          alt={title}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"
            }`}
        />

        {/* Hover image */}
        <img
          src={hoverImage}
          alt={`${title} hover`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
            }`}
        />
      </div>
      <p className="text-left mt-2 font-medium">{title}</p>
    </div>
  );
};

export default CarouselCard;
