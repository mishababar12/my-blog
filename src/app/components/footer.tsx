import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Social media icons

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-lime-100 via-fuchsia-200 to-rose-300 ">
      <div className=" w-full mx-auto  py-14  px-4 text-pink-700">
      <div className="border-b-2 w-[1145px] mx-auto mb-8 border-pink-400"></div>
        
        {/* Footer Content Container */}
        <div className="max-w-7xl mx-auto">

          
          {/* Skincare Line */}
          <div className="text-center ">
            <p className="text-lg text-pink-400 font-semibold">
              "Healthy, glowing skin starts with great care. Invest in your skin today for a radiant tomorrow."
            </p>
          </div>

          {/* Copyright Text */}
          <div className="text-center mt-2">
            <p className="text-sm text-pink-400">© 2024 Skin Care Hai. All rights reserved.</p>
          </div>



        </div>
      </div>
    </div>
  );
}
