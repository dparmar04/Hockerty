import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-white px-6 md:px-16 py-10 text-sm">
      {/* Newsletter */}
      <div className="mb-10">
        <h3 className="font-bold mb-2">Subscribe To Our Newsletter To Get Updates</h3>
        <div className="flex items-center border-b border-black max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-2 px-1 outline-none"
          />
          <button>
            <BsArrowRight className="size-5" />
          </button>
        </div>
      </div>

      {/* Links and info */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">
        {/* Men */}
        <div>
          <h4 className="font-bold mb-2">Men's Store</h4>
          <ul className="space-y-1 text-gray-700">
            <li>Custom Suits</li>
            <li>Custom Dress Shirts</li>
            <li>Custom Blazers</li>
            <li>Custom Pants</li>
            <li>Overcoats</li>
            <li className="underline">Other products</li>
          </ul>
        </div>

        {/* Women */}
        <div>
          <h4 className="font-bold mb-2">Women</h4>
          <ul className="space-y-1 text-gray-700">
            <li>Women's Suits</li>
            <li>Women's Dress Shirt</li>
            <li>Women's Blazers</li>
            <li>Women's Dress Pants</li>
            <li>Women's Wool Coats</li>
            <li className="underline">Other products</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="space-y-1 text-gray-700">
            <li>About us</li>
            <li>How it works</li>
            <li>Perfect Fit Guarantee</li>
            <li>Hockerty Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold mb-2">Support</h4>
          <ul className="space-y-1 text-gray-700">
            <li>Contact us</li>
            <li>Order fabric samples</li>
            <li>Track order</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Payment / Shipping */}
        <div className="space-y-6">
          <div>
            <h4 className="font-bold mb-2">Payment Methods</h4>
            <div className="flex flex-wrap gap-2">
              <img src="/visa.jpg" alt="Visa" className="w-12" />
              <img src="/mastercard.jpg" alt="Mastercard" className="w-12" />
              <img src="/paypal.jpg" alt="Paypal" className="w-12" />
              <img src="/apple_pay.jpg" alt="Apple Pay" className="w-12" />
              <img src="/american_express.jpg" alt="Amex" className="w-12" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-2">Shipping Partners</h4>
            <div className="flex gap-3">
              <img src="/dhl.png" alt="DHL" className="w-12" />
              <img src="/fedex.png" alt="FedEx" className="w-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Highlights & Socials */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
        <div>
          <h4 className="font-bold mb-2">Other Highlights</h4>
          <img src="/digital_commerce_award.png" alt="Digital Award" className="w-40" />
        </div>

        <div className="flex gap-4 mt-4 md:mt-0">
          <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
          <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
          <img src="/x.svg" alt="X" className="w-6 h-6" />
          <img src="/pinterest.svg" alt="Pinterest" className="w-6 h-6" />
          <img src="/tiktok.svg" alt="TikTok" className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
