import React from 'react';
import Image from 'next/image'; // For image handling (you can also use <img> tag if not using Next.js)
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Social media icons
import one from "../../../public/one.jpeg"
import two from "../../../public/two.jpg"
import three from "../../../public/three.jpeg"



export default function About() {


  return (
    <div className="bg-gradient-to-r from-lime-100 via-fuchsia-200 to-rose-300 py-16 text-white">
      {/* About Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-pink-500">
          About Me
        </h2>
        <p className="text-lg text-pink-600 mt-4 max-w-2xl mx-auto">
          Welcome to my skincare blog, where I share all things related to skincare, self-care, and achieving healthy, glowing skin.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center space-x-10">

        {/* Left Section (Text Content) */}
        <div className="flex-1 -mt-18">
          <h3 className="text-3xl font-semibold text-pink-400">
            Hi, Im a Skin Care Specialist, and Im Passionate About Skin Care
          </h3>
          <p className="text-lg text-pink-400">
            My journey with skincare began when I struggled with acne, dryness, and uneven skin tone. Like many, I tried countless products and routines, but nothing seemed to work. I realized that true skin health comes from understanding what your skin needs, and it took time to learn about ingredients, habits, and self-care routines.
          </p>
          <p className="text-lg text-pink-400">
            Now, I have made it my mission to help others achieve healthy, glowing skin by sharing my experiences, skin care tips, and expert advice. This blog is where I provide honest reviews, simple routines, and guidance to help you find the best skincare products and habits that work for you.
          </p>

          {/* Mission Section */}
          <div className="mt-8 pb-12 bg-pink-400 text-white p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold">My Mission: Healthy, Glowing Skin for Everyone</h4>
            <p className="text-lg mt-4">
              My mission is simple — to empower individuals to take care of their skin through education and proper skincare practices. I believe that anyone can have glowing, healthy skin if they understand their skin type, follow a consistent routine, and use the right products.
            </p>
            <p className="text-lg mt-2">
              Through this blog, I aim to break down the complexities of skincare and make it accessible for everyone. Whether you are looking for solutions to acne, dryness, aging, or just general skincare tips, Im here to guide you on your skincare journey.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-pink-400 hover:text-white transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-pink-400 hover:text-white transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-pink-400 hover:text-white transition duration-300" />
            </a>
          </div>
        </div>

        {/* Right Section (Profile Images) */}
        <div className="mt-8 lg:mt-0">
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 -mt-8">
              <Image src={one} alt="Skin Care Hai Logo" layout="fill" objectFit="contain" />
            </div>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 -mt-24">
              <Image src={two} alt="Skin Care Hai Logo" layout="fill" objectFit="contain" />
            </div>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 -mt-24">
              <Image src={three} alt="Skin Care Hai Logo" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>

      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h4 className="text-xl font-bold text-pink-500">Join the Skincare Community!</h4>
        <p className="text-pink-400 mt-4 max-w-2xl mx-auto">
          Be part of my skincare community to get the latest tips, product recommendations, and skincare routines delivered right to your inbox. Stay informed, stay glowing!
        </p>
        <button className="mt-6 px-8 py-3 bg-pink-400 text-white font-bold rounded-full hover:bg-white hover:text-pink-400 transition duration-300">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

