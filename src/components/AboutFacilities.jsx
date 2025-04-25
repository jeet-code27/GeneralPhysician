// components/FacilitiesSection.jsx
import About from '@/app/about/page';
import React from 'react';
import { FaHospital, FaUtensils, FaWheelchair, FaParking } from 'react-icons/fa';

const FacilityCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center">
    <div className="w-16 h-16 bg-[#2d5134] rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-[#2d5134] mb-3 text-center">{title}</h3>
    <p className="text-gray-700 text-center">
      {description}
    </p>
  </div>
);

const AboutFacilities = () => {
  const facilities = [
    {
      icon: <FaHospital className="text-white text-2xl" />,
      title: "Modern Consultation Rooms",
      description: "Comfortable consultation spaces equipped with modern diagnostic tools for accurate assessments."
    },
    {
      icon: <FaUtensils className="text-white text-2xl" />,
      title: "Nutritional Assessment Center",
      description: "Specialized equipment for detailed nutritional assessments and customized dietary planning."
    },
    {
      icon: <FaWheelchair className="text-white text-2xl" />,
      title: "Accessibility",
      description: "Our facility is fully accessible to ensure all patients can receive the care they need."
    },
    {
      icon: <FaParking className="text-white text-2xl" />,
      title: "Ample Parking",
      description: "Convenient parking available for all patients and visitors to our facility."
    }
  ];
  
  return (
    <section className="bg-[#E7EECD] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2d5134] inline-block border-b-2 border-[#eb7147] pb-2">
            Our Facilities
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFacilities;
