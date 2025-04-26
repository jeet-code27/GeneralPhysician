"use client";
import React from 'react';
import Link from 'next/link';
import { Berkshire_Swash } from 'next/font/google';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
});

const ServicesSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className={`${berkshire.className} text-xl text-[#eb7147] mb-2`}>
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5134] mb-6">
            The Essential Support Of<br />
            <span className="block">Our Healthcare Experts</span>
          </h2>
        </div>
  {/* Services Cards - Dr. Manish's Services */}
  <div>
          <h3 className={`${berkshire.className} text-2xl md:text-3xl text-[#2d5134] text-center mb-12`}>
            Dr. Manish Sharma - Medical Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Service 1 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#eb7147] group-hover:bg-[#eb7147] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#eb7147] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-[#2d5134] mb-3">Preventive Care</h4>
              <p className="text-gray-600 mb-4">
                Comprehensive health check-ups and preventive measures for seasonal diseases including typhoid and dengue.
              </p>
              <Link href="/services/preventive-care" className="inline-flex items-center text-[#eb7147] hover:text-[#d15e37]">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#eb7147] group-hover:bg-[#eb7147] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#eb7147] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-[#2d5134] mb-3">Chronic Disease Management</h4>
              <p className="text-gray-600 mb-4">
                Specialized care for diabetes, cardiac conditions, thyroid issues, and other chronic health concerns.
              </p>
              <Link href="/services/chronic-disease" className="inline-flex items-center text-[#eb7147] hover:text-[#d15e37]">
                View Details 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#eb7147] group-hover:bg-[#eb7147] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#eb7147] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-[#2d5134] mb-3">Specialized Treatment</h4>
              <p className="text-gray-600 mb-4">
                Expert care for respiratory problems, mental health concerns, and bone & spine conditions.
              </p>
              <Link href="/services/specialized-treatment" className="inline-flex items-center text-[#eb7147] hover:text-[#d15e37]">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        {/* Services Cards - Dr. Gauri's Services */}
        <div className="mb-24">
          <h3 className={`${berkshire.className} text-2xl md:text-3xl text-[#2d5134] text-center mb-12`}>
            Dr. Gauri Mehra - Nutrition Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Service 1 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#eb7147] group-hover:bg-[#eb7147] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#eb7147] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-[#2d5134] mb-3">Nutrition Counseling</h4>
              <p className="text-gray-600 mb-4">
                Personalized nutrition counseling based on your lifestyle, dietary habits, health goals, and medical conditions.
              </p>
              <Link href="/services/nutrition-counseling" className="inline-flex items-center text-[#eb7147] hover:text-[#d15e37]">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#eb7147] group-hover:bg-[#eb7147] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#eb7147] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-[#2d5134] mb-3">Meal Planning</h4>
              <p className="text-gray-600 mb-4">
                Weekly or monthly meal plans with recipes and shopping lists to fit with the health goals you want to achieve.
              </p>
              <Link href="/services/meal-planning" className="inline-flex items-center text-[#eb7147] hover:text-[#d15e37]">
                View Details 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#eb7147] group-hover:bg-[#eb7147] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#eb7147] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-[#2d5134] mb-3">Weight Management</h4>
              <p className="text-gray-600 mb-4">
                Programs focused on sustainable weight loss or maintenance through balanced eating and appropriate physical activity.
              </p>
              <Link href="/services/weight-management" className="inline-flex items-center text-[#eb7147] hover:text-[#d15e37]">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      

        {/* CTA Section */}
        {/* <div className="mt-20 text-center">
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#eb7147] hover:bg-[#d15e37] text-white text-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg rounded-sm"
          >
            Book A Consultation
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;