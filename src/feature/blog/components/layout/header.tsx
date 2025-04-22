"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import Logo from "./logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white" dir="rtl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 space-x-reverse md:flex">
            <Link
              href="/blogs"
              className="text-gray-700 transition-colors duration-200 hover:text-primary"
            >
              خانه
            </Link>
            <Link
              href="/byo"
              className="text-gray-700 transition-colors duration-200 hover:text-primary"
            >
              سرویس BYO
            </Link>

            <Link
              href="/"
              className="text-gray-700 transition-colors duration-200 hover:text-primary"
            >
              قوانین پرداخت WINaTALENT
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden items-center md:flex">
            <div className="relative">
              <input
                type="text"
                placeholder="جستجو..."
                className="w-64 rounded-md border border-gray-300 py-2 pl-10 pr-4 text-right focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="absolute left-3 top-1/2 -translate-y-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 space-y-4 pb-4 text-right md:hidden">
            <Link
              href="https://winatalent.com"
              className="block text-gray-700 transition-colors duration-200 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              خانه
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 transition-colors duration-200 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              درباره ما
            </Link>
            <Link
              href="/payment-terms"
              className="block text-gray-700 transition-colors duration-200 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              شرایط پرداخت
            </Link>
            <Link
              href="/byo"
              className="block text-gray-700 transition-colors duration-200 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              BYO
            </Link>

            {/* Mobile Search */}
            <div className="pt-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="جستجو..."
                  className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-right focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="absolute left-3 top-1/2 -translate-y-1/2 transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
