import React from "react";

const Hero = () => {
  return (
    <section
      className="hero relative h-screen bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url('/Hero2.webp')`,
      }}
    >
      {/* Mobile image override */}
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
        flex flex-col items-center text-center
        md:items-start md:text-left md:w-auto
        md:left-10 md:bottom-10
        left-1/2 top-[90%] transform -translate-x-1/2 -translate-y-1/2
        md:transform-none md:top-auto"
      >
        <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-3">
          Dress the real you
        </h1>
        <p className="text-base md:text-xl font-medium">
          Clothes made to fit you, not the other way around
        </p>
      </div>
    </section>
  );
};

export default Hero;
