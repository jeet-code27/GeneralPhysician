"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Berkshire_Swash } from 'next/font/google';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400', // Only 400 is available for this font
});

const HeroSection = () => {
  return (
    <section className="relative bg-[#E7EECD] pt-20 pb-24 md:pt-32 md:pb-36 lg:pt-36 lg:pb-40 overflow-hidden">
      {/* Floating leaves in background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/leaf-bg.avif" 
          alt="Leaf background"
          fill
          className="object-fit"
          priority
        />
      </div>
      
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 relative">
          {/* Top Fruit Image (Grapefruit) with animation - Moved to lower z-index */}
          <div className="absolute top-0 left-0 md:left-16 lg:left-32 z-0" style={{
            animation: 'float 4s ease-in-out infinite'
          }}>
            <Image
              src="/images/leftfruit.avif" 
              alt="Grapefruit"
              width={180}
              height={180}
              className="w-36 md:w-44 lg:w-52"
            />
          </div>
          
          <div className="text-center mt-32 md:mt-40 lg:mt-44 relative z-20">
            {/* Main Headline with new font */}
            <h1 className={`${berkshire.className} text-5xl md:text-6xl lg:text-7xl font-bold text-[#2d5134] mb-3 md:mb-4 leading-tight`}>
              Your Health, Our Priority
            </h1>
              
            {/* Updated Description Text */}
            <p className="text-base font-semibold md:text-lg text-[#2d5134] opacity-90 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
              Experience personalized care with Dr. Gauri Mehra, our certified Dietician, and Dr. Manish Sharma, our experienced General Physician. Together, they provide comprehensive wellness solutions tailored just for you.
            </p>
              
            {/* CTA Button */}
            <div className="mb-10 md:mb-12">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 bg-[#eb7147] hover:bg-[#d15e37] text-white text-base md:text-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg rounded-sm"
              >
                Book An Appointment
              </Link>
            </div>
          </div>
            
          {/* Bottom Fruit Image (Strawberries) with animation - Moved to lower z-index */}
          <div className="absolute bottom-0 right-0 md:right-16 lg:right-32 z-0" style={{
            animation: 'float 4s ease-in-out infinite',
            animationDelay: '1s'
          }}>
            <Image
              src="/images/stawberries.avif" 
              alt="Strawberries"
              width={240}
              height={180}
              className="w-44 md:w-52 lg:w-60"
            />
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;