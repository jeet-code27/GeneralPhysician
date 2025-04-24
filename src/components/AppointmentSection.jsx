"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Berkshire_Swash } from 'next/font/google';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
});

const AppointmentSection = () => {
  return (
    <section className="relative bg-[#E7EECD] pt-20 pb-24 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          {/* Left side with stethoscope image */}
          <div className="flex justify-center md:justify-end relative z-10">
            <div className="relative" style={{
              animation: 'float 5s ease-in-out infinite'
            }}>
              <Image
                src="/images/stethoscope.png" 
                alt="3D Stethoscope"
                width={400}
                height={400}
                className="w-64 md:w-80 lg:w-96"
              />
            </div>
          </div>
          
          {/* Right side with text and button */}
          <div className="text-center md:text-left relative z-20">
            {/* Section heading */}
            <h2 className={`${berkshire.className} text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d5134] mb-4 md:mb-5 leading-tight`}>
              Start Your Wellness Journey Today
            </h2>
              
            {/* Description Text */}
            <p className="text-base md:text-lg text-[#2d5134] opacity-90 mb-6 md:mb-8 leading-relaxed">
              Take the first step towards better health with personalized care from our expert team. Schedule your consultation now and embark on a transformative health experience.
            </p>
              
            {/* CTA Button */}
            <div className="mb-4 md:mb-0">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 bg-[#eb7147] hover:bg-[#d15e37] text-white text-base md:text-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg rounded-sm"
              >
                Book An Appointment Today
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Fruits - INCREASED SIZES */}
      {/* Bottom left fruit - Made larger */}
      <div className="absolute bottom-0 left-0 z-0" style={{
        animation: 'float 4s ease-in-out infinite',
        animationDelay: '0.5s'
      }}>
        {/* <Image
          src="/images/fruit3.png" 
          alt="Strawberries"
          width={220}
          height={180}
          className="w-40 md:w-56 lg:w-64"
        /> */}
      </div>

      {/* Top right fruit - Made larger */}
      <div className="absolute top-0 right-0 z-0" style={{
        animation: 'float 4s ease-in-out infinite',
        animationDelay: '1.5s'
      }}>
        {/* <Image
          src="/images/leftfruit.avif" 
          alt="Grapefruit"
          width={180}
          height={180}
          className="w-36 md:w-44 lg:w-52"
        /> */}
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AppointmentSection;