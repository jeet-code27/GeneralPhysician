"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Berkshire_Swash } from 'next/font/google';
import {  FaClock,  FaHospital, FaCheck  } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

import { BsArrowRight } from 'react-icons/bs';
import { BiSolidPhoneCall } from "react-icons/bi";
const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
});

const AboutUsSection = () => {
  return (
    <section className="bg-[#FDF1ED] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className={`${berkshire.className} text-xl text-[#eb7147] mb-2`}>
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5134] mb-6">
            Meet Our Expert Healthcare Team
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our experienced professionals are dedicated to providing personalized care and 
            comprehensive healthcare solutions tailored to your specific needs.
          </p>
        </div>

        {/* Doctor Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dr. Gauri Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col">
              {/* Card Header with Image */}
              <div className="bg-[#2d5134] p-6 flex items-center">
                <div className="w-24 h-24 bg-white rounded-full overflow-hidden border-4 border-white flex-shrink-0">
                  <Image
                    src="/images/dr-gauri.jpg"
                    alt="Dr. Gauri Mehra"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-5 text-white">
                  <h3 className={`${berkshire.className} text-2xl`}>
                    Dr. Gauri Mehra
                  </h3>
                  <p className="text-[#E7EECD] text-lg">Dietician</p>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-6">
                {/* Contact Info */}
                <div className="flex items-center mb-4">
                  <BiSolidPhoneCall  className="h-5 w-5 text-[#eb7147] mr-2" />
                  <p className="text-gray-700">Contact: 9461068894</p>
                </div>
                
                {/* Specializations */}
                <div className="mb-5">
                  <h4 className="font-semibold text-[#2d5134] mb-3 bg-[#E7EECD] inline-block px-3 py-1 rounded">
                    Specializations
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                    {[
                      "Weight Loss/Gain Diet",
                      "Anti-Diabetic Diet",
                      "Gastro Health Diet",
                      "Child Nutrition Care",
                      "Keto Diet",
                      "Renal Care Diet",
                      "Pregnancy/Lactation Diet",
                      "Cardiac Diet"
                    ].map((specialization, index) => (
                      <div key={index} className="flex items-center">
                        <FaCheck className="w-4 h-4 text-[#eb7147] mr-2" />
                        <span className="text-gray-700">{specialization}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Consultation Info */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center mb-2">
                    <FaClock className="h-5 w-5 text-[#eb7147] mr-2" />
                    <p className="text-gray-700"><span className="font-medium">Hours:</span> 10:00 AM - 2:00 PM</p>
                  </div>
                  <div className="flex items-start">
                    <FaLocationDot  className="h-5 w-12 text-[#eb7147] mr-2 mt-0.5" />
                    <p className="text-gray-700"><span className="font-medium">Location:</span> Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dr. Manish Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col">
              {/* Card Header with Image */}
              <div className="bg-[#2d5134] p-6 flex items-center">
                <div className="w-24 h-24 bg-white rounded-full overflow-hidden border-4 border-white flex-shrink-0">
                  <Image
                    src="/images/dr-manish.jpg"
                    alt="Dr. Manish Sharma"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-5 text-white">
                  <h3 className={`${berkshire.className} text-2xl`}>
                    Dr. Manish Sharma
                  </h3>
                  <p className="text-[#E7EECD] text-lg">M.D. (General Physician)</p>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-6">
                {/* Contact Info */}
                <div className="flex items-center mb-4">
                  <BiSolidPhoneCall  className="h-5 w-5 text-[#eb7147] mr-2" />
                  <p className="text-gray-700">Contact: 8690761918</p>
                </div>
                
                {/* Specializations */}
                <div className="mb-5">
                  <h4 className="font-semibold text-[#2d5134] mb-3 bg-[#E7EECD] inline-block px-3 py-1 rounded">
                    Specializations
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                    {[
                      "Seasonal Diseases",
                      "Diabetes (Sugar)",
                      "Respiratory Problems",
                      "Cardiac Diseases",
                      "Mental & Brain Disorders",
                      "Thyroid Issues",
                      "Paralysis & Bone Conditions",
                      "Stomach Related Diseases"
                    ].map((specialization, index) => (
                      <div key={index} className="flex items-center">
                        <FaCheck className="w-4 h-4 text-[#eb7147] mr-2" />
                        <span className="text-gray-700">{specialization}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Consultation Info */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center mb-2">
                    <FaClock className="h-5 w-5 text-[#eb7147] mr-2" />
                    <p className="text-gray-700"><span className="font-medium">Hours:</span> 10:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaHospital className="h-5 w-5 text-[#eb7147] mr-2" />
                    <p className="text-gray-700"><span className="font-medium">Evening:</span> 5:00 PM - 8:00 PM (Pawan Putra Medical)</p>
                  </div>
                  <div className="flex items-start">
                    <FaLocationDot  className="h-5 w-10 text-[#eb7147] mr-2 mt-0.5" />
                    <p className="text-gray-700"><span className="font-medium">Location:</span> Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance & Facilities */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className={`${berkshire.className} text-xl text-[#2d5134] mb-4 text-center`}>
            Accepted Insurance & Facilities
          </h3>
          <div className="flex flex-wrap text-[#2D5134] justify-center gap-3">
            {[
              "Chiranjeevi",
              "RGHS",
              "CGHS",
              "CAPF",
              "RAILWAY",
              "All Types of TPA"
            ].map((insurance, index) => (
              <span key={index} className="bg-[#E7EECD] px-3 py-1 rounded text-sm">{insurance}</span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#eb7147] hover:bg-[#d15e37] text-white text-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg rounded-sm"
          >
            Schedule An Appointment
            <BsArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;