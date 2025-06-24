import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url('/Hero2.webp')`,
      }}
    >
      <div className="absolute bottom-10 left-10 z-10 text-white">
        <h1 className="text-7xl font-semibold leading-tight mb-3">
          Dress the real you
        </h1>
        <p className="text-xl font-medium">
          Clothes made to fit you, not the other way around
        </p>
      </div>
    </section>
  );
};

export default Hero;
