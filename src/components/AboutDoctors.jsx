import React from 'react';
import { FaPhone, FaClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const DoctorsSection = () => {
  // Normally you would import and set up the font like this:
  // const berkshire = Berkshire_Swash({
  //   subsets: ['latin'],
  //   weight: '400',
  // });
  
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Leaf decorations in background */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#9ab665] opacity-10 -z-10"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-[#9ab665] opacity-10 -z-10"></div>
      <div className="absolute top-60 right-40 w-16 h-16 rounded-full bg-[#9ab665] opacity-10 -z-10"></div>
      <div className="absolute bottom-20 left-40 w-20 h-20 rounded-full bg-[#9ab665] opacity-10 -z-10"></div>
      <div className="absolute top-40 left-1/2 w-28 h-28 rounded-full bg-[#9ab665] opacity-10 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-center text-[#2e5d3c] mb-16" style={{ fontFamily: "'Berkshire Swash', cursive" }}>
          Meet Our Doctors
        </h2>
        
        <div className="flex flex-col gap-12">
          {/* Dr. Manish Sharma */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="h-full">
                  <img 
                    src="/images/dr-manish.jpg" 
                    alt="Dr. Manish Sharma" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-1 text-[#2e5d3c]" style={{ fontFamily: "'Berkshire Swash', cursive" }}>Dr. Manish Sharma</h3>
                  <p className="text-xl text-gray-700">M.D. (General Physician)</p>
                  <div className="flex items-center mt-3">
                    <FaPhone className="text-[#609966] mr-3" />
                    <span className="text-lg">+91 8690761918</span>
                  </div>
                </div>
                
                <h4 className="text-xl text-[#2e5d3c] mb-4 font-semibold" style={{ fontFamily: "'Berkshire Swash', cursive" }}>Specializations</h4>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Seasonal Diseases",
                    "Diabetes (Sugar)",
                    "Respiratory Problems",
                    "Cardiac Diseases",
                    "Mental & Brain Disorders",
                    "Thyroid Issues",
                    "Paralysis & Bone Conditions",
                    "Stomach Related Diseases"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <FaCheckCircle className="text-[#609966] mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-xl text-[#2e5d3c] mb-4 font-semibold" style={{ fontFamily: "'Berkshire Swash', cursive" }}>Consultation Hours</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#f3f8e9] p-4 rounded-lg">
                      <h5 className="font-bold text-[#2e5d3c] mb-2">Morning</h5>
                      <div className="flex items-center mb-2">
                        <FaClock className="text-[#609966] mr-2" />
                        <span>10:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-[#609966] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer</span>
                      </div>
                    </div>
                    <div className="bg-[#f3f8e9] p-4 rounded-lg">
                      <h5 className="font-bold text-[#2e5d3c] mb-2">Evening</h5>
                      <div className="flex items-center mb-2">
                        <FaClock className="text-[#609966] mr-2" />
                        <span>5:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-[#609966] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Pawan Putra Medical</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dr. Gauri Mehra */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="h-full">
                  <img 
                    src="/images/dr-gauri.jpg" 
                    alt="Dr. Gauri Mehra" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-1 text-[#2e5d3c]" style={{ fontFamily: "'Berkshire Swash', cursive" }}>Dr. Gauri Mehra</h3>
                  <p className="text-xl text-gray-700">Dietician</p>
                  <div className="flex items-center mt-3">
                    <FaPhone className="text-[#609966] mr-3" />
                    <span className="text-lg">+91 9461068894</span>
                  </div>
                </div>
                
                <h4 className="text-xl text-[#2e5d3c] mb-4 font-semibold" style={{ fontFamily: "'Berkshire Swash', cursive" }}>Specializations</h4>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Weight Loss/Gain Diet",
                    "Anti-Diabetic Diet",
                    "Gastro Health Diet",
                    "Child Nutrition Care",
                    "Keto Diet",
                    "Renal Care Diet",
                    "Pregnancy/Lactation Diet",
                    "Cardiac Diet"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <FaCheckCircle className="text-[#609966] mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-xl text-[#2e5d3c] mb-4 font-semibold" style={{ fontFamily: "'Berkshire Swash', cursive" }}>Consultation Hours</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#f3f8e9] p-4 rounded-lg">
                      <h5 className="font-bold text-[#2e5d3c] mb-2">Morning</h5>
                      <div className="flex items-center mb-2">
                        <FaClock className="text-[#609966] mr-2" />
                        <span>10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-[#609966] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer</span>
                      </div>
                    </div>
                    <div className="bg-[#f3f8e9] p-4 rounded-lg">
                      <h5 className="font-bold text-[#2e5d3c] mb-2">Evening</h5>
                      <div className="flex items-center mb-2">
                        <FaClock className="text-[#609966] mr-2" />
                        <span>5:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-[#609966] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Pawan Putra Medical</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-[#e87461] hover:bg-[#d56753] text-white font-bold py-4 px-10 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Book An Appointment Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;