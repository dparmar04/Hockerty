import React from "react";

const Hero = () => {
  return (
    <section
      className="hero relative h-screen bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url('/Hero2.webp')`,
      }}
    >
      {/* Mobile-specific background override */}
      <style>
        {`
          @media (max-width: 768px) {
            .hero {
              background-image: url('/mob_hero.webp') !important;
            }
          }
        `}
      </style>

      <div
        className="absolute z-10 text-white px-4 w-full
        flex flex-col items-center text-center md:items-center md:text-center lg:items-start lg:text-left lg:w-auto top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2
        lg:top-auto lg:bottom-10 lg:left-1/3 lg:transform-none
        max-w-[90%] md:max-w-[80%] lg:max-w-none"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-tight mb-3">
          Dress the real you
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-medium">
          Clothes made to fit you, not the other way around
        </p>
      </div>
    </section>
  );
};

export default Hero;
