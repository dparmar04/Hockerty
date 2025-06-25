import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function PerfectFit() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = gsap.utils.toArray(".parallax-img");

    elements.forEach((el) => {
      const speed = parseFloat(el.dataset.speed) || 0.5;

      gsap.to(el, {
        yPercent: -100 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#aa5641] min-h-screen h-auto relative overflow-hidden px-4 py-16 md:px-0"
    >
      {/* Images */}
      <img
        src="/pf_1.jpg"
        alt="pefect fit"
        className="parallax-img absolute w-32 md:w-48 top-4 left-1/2 transform -translate-x-1/2 md:left-1/4"
        data-speed="0.6"
      />
      <img
        src="/pf_2.jpg"
        alt="pefect fit"
        className="parallax-img absolute w-32 md:w-48 top-0 right-4 md:right-10"
        data-speed="0.6"
      />
      <img
        src="/pf_3.jpg"
        alt="pefect fit"
        className="parallax-img absolute w-32 md:w-52 top-[65%] right-[25%]"
        data-speed="2"
      />
      <img
        src="/pf_4.jpg"
        alt="pefect fit"
        className="parallax-img absolute w-32 md:w-52 top-[50%] left-[10%]"
        data-speed="-0.3"
      />
      <img
        src="/pf_5.jpg"
        alt="pefect fit"
        className="parallax-img absolute w-32 md:w-44 bottom-0 left-4"
        data-speed="0.6"
      />
      <img
        src="/pf_6.jpg"
        alt="pefect fit"
        className="parallax-img absolute w-32 md:w-44 bottom-10 right-4 md:right-10"
        data-speed="-0.2"
      />

      {/* Content */}
      <div className="absolute w-[90%] md:w-[30%] top-[20%] md:left-1/2 left-[5%] text-white text-left md:-translate-x-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
          Perfect fit garments, to your specifications
        </h1>
        <p className="my-4 text-sm sm:text-base">
          From fabrics and buttons to pocket styles and lining colors,
          personalize your handcrafted look. Take control and feel confident
          with our Perfect Fit Guarantee.
        </p>
        <a href="#" className="mt-5 underline block text-sm sm:text-base">
          Learn more
        </a>
      </div>
    </div>
  );
}

export default PerfectFit;
