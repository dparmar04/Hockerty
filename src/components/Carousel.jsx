import { useRef, useState, useEffect } from "react";
import CarouselCard from "./CarouselCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";

const data = [
  { title: "Custom Suits", image: "/suit_1.webp", hoverImage: "/suit_2.webp" },
  { title: "Custom Shirts", image: "/shirt_1.webp", hoverImage: "/shirt_2.webp" },
  { title: "Blazers", image: "/blazer_1.webp", hoverImage: "/blazer_2.webp" },
  { title: "Wedding", image: "/wedding_1.webp", hoverImage: "/wedding_2.webp" },
  { title: "Polo shirts", image: "/polo_1.webp", hoverImage: "/polo_2.webp" },
  { title: "Tuxedos", image: "/tuxedo_1.webp", hoverImage: "/tuxedo_2.webp" },
  { title: "Vests", image: "/vest_1.webp", hoverImage: "/vest_2.webp" },
  { title: "Shoes", image: "/shoes_loafers_1.webp", hoverImage: "/shoes_loafers_2.webp" },
  { title: "Jeans", image: "/jeans_1.webp", hoverImage: "/jeans_2.webp" },
  { title: "Field Jacket", image: "/field_1.webp", hoverImage: "/field_2.webp" },
  { title: "Trenchcoats", image: "/trench_1.webp", hoverImage: "/trench_2.webp" },
];

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Sync visibility state when swiper is ready or updated
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
    <div className="relative px-4 py-10">
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
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        spaceBetween={20}
        speed={800}
        slidesPerView={1.5}
        slidesPerGroup={4}
        breakpoints={{
          640: { slidesPerView: 2.1 },
          768: { slidesPerView: 3.1 },
          1024: { slidesPerView: 4.1 },
          1280: { slidesPerView: 5.1 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <CarouselCard
              image={item.image}
              hoverImage={item.hoverImage}
              title={item.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
