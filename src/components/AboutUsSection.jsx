"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Berkshire_Swash } from 'next/font/google';

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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb7147] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
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
                        <svg className="w-4 h-4 text-[#eb7147] mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{specialization}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Consultation Info */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb7147] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700"><span className="font-medium">Hours:</span> 10:00 AM - 2:00 PM</p>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb7147] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb7147] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
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
                        <svg className="w-4 h-4 text-[#eb7147] mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{specialization}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Consultation Info */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb7147] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700"><span className="font-medium">Hours:</span> 10:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb7147] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-gray-700"><span className="font-medium">Evening:</span> 5:00 PM - 8:00 PM (Pawan Putra Medical)</p>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb7147] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;