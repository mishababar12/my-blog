"use client"
import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; // Import phone, location, and email icons

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server or display a confirmation)
    alert('Form submitted!');
  };

  return (
    <div className="w-full bg-gradient-to-r from-lime-100 via-fuchsia-200 to-rose-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-extrabold text-pink-400 mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-lg text-pink-400 mb-8">
            We had love to hear from you! Fill out the form below and we will get back to you.
          </p>
        </div>

        {/* Flex Container for Contact Info and Form */}
        <div className="flex flex-col lg:flex-row justify-between items-start space-x-12">

          {/* Left Section (Contact Info) */}
          <div className="lg:w-1/2 p-10 flex flex-col justify-between h-full ml-8">

            <h3 className="text-3xl font-extrabold text-pink-400 mb-6">Contact Info</h3>
            <div className="items-center justify-center text-center ">
              <div className="flex mb-6">
                <FaMapMarkerAlt className="text-4xl text-pink-400 mr-4" />
                <p className="text-lg text-pink-400">123 SkinCare Street, New York, NY 10001</p>
              </div>

              <div className="flex mb-6">
                <FaPhoneAlt className="text-4xl text-pink-400 mr-4" />
                <p className="text-lg text-pink-400">+1 (234) 567-890</p>
              </div>

              {/* Additional Contact Information */}
              <div className="flex mb-6">
                <FaEnvelope className="text-4xl text-pink-400 mr-4" />
                <p className="text-lg text-pink-400">contact@skincare.com</p>
              </div>
            </div>

            <div className="text-lg text-pink-400">
              <p>Business Hours:</p>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat - Sun: Closed</p>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="lg:w-1/2 p-10 flex flex-col justify-between h-full">

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="text-start">
                <label className="text-pink-400 font-semibold" htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-pink-400 rounded-md focus:outline-none focus:border-pink-600"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="text-start">
                <label className="text-pink-400 font-semibold" htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-pink-400 rounded-md focus:outline-none focus:border-pink-600"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="text-start">
                <label className="text-pink-400 font-semibold" htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message . ."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-pink-400 rounded-md focus:outline-none focus:border-pink-600"
                  rows={4}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="bg-transparent border-2 border-pink-400 text-pink-400 px-6 py-2 rounded-md font-semibold hover:bg-pink-400 hover:text-white transition duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

