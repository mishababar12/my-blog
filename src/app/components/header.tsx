"use client"

import Image from 'next/image';
import logo from "../../../public/logo.png"; // Update this path with your logo's location
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"; // Import the hamburger icons

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <div>
      <header className="flex items-center justify-between p-4 bg-gradient-to-r from-lime-100 via-fuchsia-200 to-rose-300">
        
        {/* Logo and Blog Name */}
        <a href="#" className="flex items-center space-x-3">
          {/* Logo Image */}
          <div className="relative w-12 h-12">
            <Image src={logo} alt="Skin Care Hai Logo" layout="fill" objectFit="contain" />
          </div>
          {/* Blog Name */}
          <span className="text-2xl font-bold text-pink-400">Skin Care</span>
        </a>

        {/* Hamburger Button (Visible only on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-pink-400">
            {isMenuOpen ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
          </button>
        </div>

        {/* Navigation Links - Desktop View */}
        <nav className="hidden md:flex font-bold space-x-6">
          <a href="#" className="text-pink-400 hover:text-pink-600 transition duration-300">Home</a>
          <a href="/abuot" className="text-pink-400 hover:text-pink-600 transition duration-300">About</a>
          <a href="/blog" className="text-pink-400 hover:text-pink-600 transition duration-300">Blog</a>
          <a href="/contact" className="text-pink-400 hover:text-pink-600 transition duration-300">Contact</a>
        </nav>

        {/* Mobile Menu - Hidden on Desktop */}
        <div className={`md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-lime-100 via-fuchsia-200 to-rose-300 p-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col items-center space-y-4">
            <a href="#" className="text-pink-400 hover:text-pink-600 transition duration-300">Home</a>
            <a href="/abuot" className="text-pink-400 hover:text-pink-600 transition duration-300">About</a>
            <a href="/blog" className="text-pink-400 hover:text-pink-600 transition duration-300">Blog</a>
            <a href="/contact" className="text-pink-400 hover:text-pink-600 transition duration-300">Contact</a>
          </nav>
        </div>
      </header>
    </div>
  );
}
