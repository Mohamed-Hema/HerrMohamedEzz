"use client";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-black">
            <Link href="/">HerrMohamedEzz</Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={handleMenuToggle}
              className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path className="fill-current" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path className="fill-current" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          <div
            className={`${isMenuOpen ? "block" : "hidden"} lg:flex space-x-4`}
          >
            <Link href="#wallet">المحفظة</Link>
            <Link href="#lessons">الدروس</Link>
            <Link href="#subscribe">الاشتراك</Link>
            <Link href="#prices">الاسعار</Link>
          </div>

          <div className="hidden lg:block">
            <Link
              href="#signin"
              className="bg-transparent hover:bg-primary-500 text-secondary-500 font-semibold hover:text-white py-2 px-4 border border-secondary-500 hover:border-transparent rounded"
            >
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
