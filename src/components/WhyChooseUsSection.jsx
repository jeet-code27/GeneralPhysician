"use client";
import React from 'react';
import Image from 'next/image';
import { Berkshire_Swash } from 'next/font/google';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
});

const WhyChooseUsSection = () => {
  return (
    <section className="relative bg-[#f4f8e8] py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Floating leaves in background - reusing same styling */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-50">
        <Image
          src="/images/leaf-bg.avif"
          alt="Leaf background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Larger decorative fruit top left */}
      <div className="absolute top-10 left-4 md:left-12 z-10" style={{
        animation: 'float 5s ease-in-out infinite',
        animationDelay: '0.5s'
      }}>
        <Image
          src="/images/stawberries.avif"
          alt="Strawberry decoration"
          width={120}
          height={120}
          className="w-24 md:w-28 lg:w-32"
        />
      </div>

      {/* Larger decorative fruit bottom right */}
      <div className="absolute bottom-10 right-4 md:right-12 z-10" style={{
        animation: 'float 5s ease-in-out infinite',
        animationDelay: '1.5s'
      }}>
        <Image
          src="/images/leftfruit.avif"
          alt="Grapefruit decoration"
          width={120}
          height={120}
          className="w-24 md:w-28 lg:w-32"
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`${berkshire.className} text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d5134] mb-3 md:mb-4`}>
            Why Choose Us
          </h2>
          <p className="text-base md:text-lg text-[#2d5134] opacity-90 max-w-2xl mx-auto">
            We combine nutrition expertise and medical care to give you the best health support all in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Feature 1 */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#e7eecd] rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Complete Health Care</h3>
            <p className="text-[#2d5134] opacity-80">
              Get both nutrition and medical care in one place. Dr. Gauri helps with your diet while Dr. Manish handles your medical needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#e7eecd] rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Expert Team</h3>
            <p className="text-[#2d5134] opacity-80">
              Our doctors are experts in their fields. Dr. Gauri is a certified dietician and Dr. Manish is an experienced physician.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#e7eecd] rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Plans Made For You</h3>
            <p className="text-[#2d5134] opacity-80">
              We create health plans just for you. Your diet and treatment are based on your specific health needs and goals.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#e7eecd] rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Ongoing Support</h3>
            <p className="text-[#2d5134] opacity-80">
              We stay with you throughout your health journey. Regular check-ups and plan adjustments ensure you reach your health goals.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#e7eecd] rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Science-Based Care</h3>
            <p className="text-[#2d5134] opacity-80">
              Our treatments and diet plans are based on proven medical and nutritional science. We use what works, not what's trendy.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#e7eecd] rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Easy Communication</h3>
            <p className="text-[#2d5134] opacity-80">
              We listen to your concerns and explain everything clearly. Both doctors are easy to talk to and answer all your questions.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <a 
            href="/appointment" 
            className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 bg-[#eb7147] hover:bg-[#d15e37] text-white text-base md:text-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg rounded-sm"
          >
            Book An Appointment Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;