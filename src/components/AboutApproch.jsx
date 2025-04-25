// components/ApproachSection.jsx
import React from 'react';
import { FaUserMd, FaClipboardCheck, FaHeartbeat } from 'react-icons/fa';
import { Berkshire_Swash } from 'next/font/google';

// Initialize the Berkshire Swash font
const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400', // Only 400 is available for this font
});

const AboutApproach = () => {
  const approaches = [
    {
      icon: <FaUserMd className="text-white text-2xl" />,
      title: "Personalized Care",
      description: "We believe every patient is unique. Our treatments are tailored to your specific health conditions, lifestyle, and personal goals."
    },
    {
      icon: <FaClipboardCheck className="text-white text-2xl" />,
      title: "Integrated Approach",
      description: "We combine medical treatment with nutritional guidance to provide comprehensive healthcare solutions that address the root causes."
    },
    {
      icon: <FaHeartbeat className="text-white text-2xl" />,
      title: "Preventive Focus",
      description: "We emphasize prevention, education, and lifestyle modifications to help you maintain optimal health and prevent future issues."
    }
  ];
  
  return (
    <section className="bg-[#E7EECD] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`${berkshire.className} text-4xl text-[#2d5134] inline-block border-b-2 border-[#eb7147] pb-2`}>
            Our Approach to Healthcare
          </h2>
          <div className="w-24 h-1 bg-[#eb7147] mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="w-20 h-20 bg-[#2d5134] rounded-full flex items-center justify-center mb-6 mx-auto">
                {approach.icon}
              </div>
              <h3 className={`${berkshire.className} text-2xl text-[#2d5134] text-center mb-4`}>{approach.title}</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutApproach;