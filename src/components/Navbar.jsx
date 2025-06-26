import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiMessageCircle,
} from "react-icons/fi";
import {
  PiArrowUpLight,
  PiBagLight,
  PiGlobeLight,
  PiUserCircleLight,
} from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const [scrollDir, setScrollDir] = useState("up");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBg(currentScrollY > 50);
      setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showBg ? "bg-white shadow text-black" : "bg-transparent text-white"
        } ${scrollDir === "down" ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="px-4 sm:px-6 lg:px-10 flex items-center h-16">

        <nav className="hidden md:flex flex-1 justify-start space-x-8 text-md text-nowrap font-light">
          <a href="#">Lookbooks</a>
          <a href="#">Custom Clothing</a>
          <a href="#">Custom Footwear</a>
          <a href="#">Women <PiArrowUpLight className="inline size-5 rotate-45" /></a>
        </nav>

        <button
          className="text-inherit text-xl md:hidden ml-2"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="text-2xl font-semibold flex-1 text-center">Hockerty</div>


        <div className="flex flex-1 items-center justify-end space-x-4">

          <button className="text-inherit">
            <FiMessageCircle className="size-5" />
          </button>
          <button className="text-inherit">
            <PiBagLight className="size-5" />
          </button>

          {/* Desktop Only: Global & Login */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center gap-1">
              <PiGlobeLight className="size-5" /> Global
            </div>
            <div className="flex items-center gap-1">
              <PiUserCircleLight className="size-5" /> Login
            </div>


          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 overflow-y-auto transform transition-all duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}>
          <div className="flex items-center justify-between px-5 h-16 border-b">
            <button onClick={toggleMenu}>
              <FiX className="text-black text-2xl" />
            </button>
            <div className="text-xl font-semibold">Hockerty</div>
            <div className="flex space-x-4">
              <FiMessageCircle className="text-black size-5" />
              <PiBagLight className="text-black size-5" />
            </div>
          </div>
          <div className=" absolute flex flex-col gap-5 px-6 py-6 text-black text-base font-medium">
            <a href="#">Lookbooks</a>
            <a href="#">Clothing</a>
            <a href="#">Occasion</a>
            <a href="#">Footwear</a>
            <a href="#">Accessories</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <div className="border-t flex flex-col gap-y-4 border-gray-200 pt-4">
              <a href="#">Blog</a>
              <a href="#">Order samples</a>
              <a href="#">Giftcard</a>
              <a href="#">Contact us</a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full px-6 py-3 border-t bg-gray-50 text-sm text-black flex justify-between">
            <span>Access your account</span>
            <span>English ▼</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
