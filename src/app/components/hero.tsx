import Image from 'next/image';
import React from 'react';
import zeero from "../../../public/zeero.png";
import Link from 'next/link';
import { RiSingleQuotesL } from "react-icons/ri";
import { RiSingleQuotesR } from "react-icons/ri";

export default function Hero() {
  return (
    <div className="w-full bg-gradient-to-r from-lime-100 via-fuchsia-200 to-rose-300">
      {/* Navbar Border */}
      <div className="border-b-2 w-full lg:w-[1150px] mx-auto border-pink-400"></div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row justify-center items-center py-4 m-0">

        {/* Left Side - Heading and Paragraph */}
        <div className="flex flex-col justify-start text-left max-w-xl px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-pink-400 mt-8">
            Healthy Skins <br/> a reflection <br/> of Wellness
          </h2>
          <p className="text-pink-400 mt-8">
            Skin health is an essential part of your overall well-being. It’s the first thing people notice, and it’s important to invest time and effort in taking care of it. By making small but consistent changes, you can have glowing, healthy skin.
          </p>
          <div className='mt-8'>
            <button className="bg-transparent border-2 border-pink-400 text-pink-400 px-6 py-2 rounded-md font-semibold hover:bg-pink-400 hover:text-white transition duration-300">
            <Link href="/abuot">Visit More</Link>
            </button>
          </div>
        </div>

        {/* Right Side - Circular Image with Icons and Content */}
        <div className="flex flex-col items-center mt-8 md:mt-0">
          {/* Centered Image */}
          <div className="relative w-[300px] h-[300px] mb-4">
            <Image 
              src={zeero} 
              alt="skin"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-pink-300"
            />
          </div>
        </div>

        {/* Right Content - Paragraph and Icons (Horizontal Alignment) */}
        <div className="flex flex-col items-center mt-8 md:mt-0">
          {/* Icons */}
          <div className="flex mb-4">
            <RiSingleQuotesR className="text-3xl text-pink-400" />
            <RiSingleQuotesL className="text-3xl text-pink-400" />
          </div>

          {/* Paragraph */}
          <p className="text-lg text-pink-400 max-w-2xl mx-auto text-center mt-2 ml-5">
            Invest in your skin—it’s going to<br/> represent you for a very long time.
          </p>
        </div>
      </div>
    </div>
  );
}
