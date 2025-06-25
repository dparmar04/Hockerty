import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const outfits = [
  { image: "/outfit_1.jpg" },
  { image: "/outfit_2.jpg" },
  { image: "/outfit_3.jpg" },
  { image: "/outfit_4.jpg" },
  { image: "/outfit_5.jpg" },
  { image: "/outfit_6.jpg" },
  { image: "/outfit_7.jpg" },
  { image: "/outfit_8.jpg" },
  { image: "/outfit_9.jpg" },
  { image: "/outfit_10.jpg" },
];

const OutfitIdeas = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (!swiperInstance) return;
    const updateState = () => {
      setIsStart(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    };
    updateState();
    swiperInstance.on("slideChange", updateState);
    return () => {
      swiperInstance.off("slideChange", updateState);
    };
  }, [swiperInstance]);


  return (
    <section className="bg-[#1c2221] text-white px-4 sm:px-10 lg:px-20 py-16 relative">


      {/* Top Text + CTA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div>
          <h2 className="text-4xl font-bold mb-4">Outfit Ideas</h2>
          <p className="text-base text-gray-300 max-w-xl">
            Get inspired by our community. Real customers like you styling great outfits based on Hockerty garments
          </p>
        </div>
        <button className="bg-white text-black font-medium py-2 px-5 rounded-full whitespace-nowrap hover:bg-[#1c2221] hover:text-white hover:border hover:border-white transition-all duration-300 cursor-pointer">
          Check them all
        </button>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Custom Nav Buttons */}
        <button
          ref={prevRef}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white p-5 rounded-full hover:bg-gray-800 transition-all ${isStart ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
          <BsArrowLeft size={25} />
        </button>

        <button
          ref={nextRef}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white p-5 rounded-full hover:bg-gray-800 transition-all ${isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
          <BsArrowRight size={25} />
        </button>

        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          speed={800}
          slidesPerGroup={4}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
            1280: { slidesPerView: 5.2 },
          }}
        >
          {outfits.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-[full] h-[350px] overflow-hidden group">
                {/* Image */}
                <img
                  src={item.image}
                  alt={`outfit-${index}`}
                  className="w-full h-full object-cover transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="bg-black text-white font-medium py-2 px-6 rounded-full hover:bg-gray-200 hover:text-black transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OutfitIdeas;
