// components/ValuesSection.jsx
import React from 'react';
import { FaMedal, FaHandHoldingHeart, FaBalanceScale, FaBookOpen } from 'react-icons/fa';
import { Berkshire_Swash } from 'next/font/google';

// Initialize the Berkshire Swash font
const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400', // Only 400 is available for this font
});

const AboutValues = () => {
  const values = [
    {
      icon: <FaMedal className="text-[#eb7147] text-2xl" />,
      title: "Excellence",
      description: "We strive to provide the highest quality care using evidence-based practices and staying updated with medical advancements."
    },
    {
      icon: <FaHandHoldingHeart className="text-[#eb7147] text-2xl" />,
      title: "Compassion",
      description: "We approach each patient with empathy, understanding, and respect, recognizing the whole person beyond their medical condition."
    },
    {
      icon: <FaBalanceScale className="text-[#eb7147] text-2xl" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our practices, being honest and transparent with our patients."
    },
    {
      icon: <FaBookOpen className="text-[#eb7147] text-2xl" />,
      title: "Education",
      description: "We believe in empowering patients with knowledge about their health, enabling them to make informed decisions."
    }
  ];
  
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`${berkshire.className} text-4xl text-[#2d5134] inline-block border-b-2 border-[#eb7147] pb-2`}>
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-[#eb7147] mx-auto mt-2"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex items-start space-x-4 w-full md:w-5/12 bg-[#E7EECD] p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                {value.icon}
              </div>
              <div>
                <h3 className={`${berkshire.className} text-xl text-[#2d5134] mb-3`}>{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;