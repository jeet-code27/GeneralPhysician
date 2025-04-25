import Image from 'next/image';
import { FaHandHoldingHeart, FaUserMd, FaCalendarAlt } from 'react-icons/fa';
import { Berkshire_Swash } from 'next/font/google';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400', // Only 400 is available for this font
});

const AboutStory = () => {
  return (
    <section className="bg-white py-16 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#E7EECD] opacity-20 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#E7EECD] opacity-20 rounded-tl-full"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`${berkshire.className} text-4xl font-bold text-[#2d5134] mb-8 flex items-center`}>
              <FaHandHoldingHeart className="text-[#eb7147] mr-4 text-3xl" />
              Our Story
            </h2>
           
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-full py-1">
                  <div className="w-3 h-3 rounded-full bg-[#eb7147]"></div>
                  <div className="w-0.5 h-full bg-[#E7EECD] mx-auto"></div>
                </div>
                <p className="text-gray-700 ml-5 text-lg">
                  Founded with a vision to provide integrated healthcare solutions, our clinic brings together medical expertise and nutritional science under one roof.
                </p>
              </div>
             
              <div className="flex items-start">
                <div className="h-full py-1">
                  <div className="w-3 h-3 rounded-full bg-[#eb7147]"></div>
                  <div className="w-0.5 h-full bg-[#E7EECD] mx-auto"></div>
                </div>
                <p className="text-gray-700 ml-5 text-lg">
                  Dr. Manish Sharma and Dr. Gauri Mehra established this practice with the belief that true wellness comes from addressing both medical conditions and nutritional needs.
                </p>
              </div>
             
              <div className="flex items-start">
                <div className="h-full py-1">
                  <div className="w-3 h-3 rounded-full bg-[#eb7147]"></div>
                </div>
                <p className="text-gray-700 ml-5 text-lg">
                  Since our establishment, we've been dedicated to delivering personalized care that focuses on treating not just symptoms, but improving overall quality of life for our patients.
                </p>
              </div>
            </div>
           
            <div className="mt-8 bg-[#E7EECD] rounded-lg p-5 flex items-center shadow-md transition-transform hover:scale-105">
              <FaCalendarAlt className="text-[#2d5134] text-3xl mr-4" />
              <div>
                <span className={`${berkshire.className} font-medium text-xl text-[#2d5134]`}>Serving Ajmer</span>
                <p className="text-gray-700">since 20xx</p>
              </div>
            </div>
          </div>
         
          <div className="rounded-xl overflow-hidden shadow-lg border-4 border-[#E7EECD] transform transition-transform hover:scale-105">
            <div className="relative">
              <Image
                src="/images/clinic.webp"
                alt="Our Clinic"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2d5134] to-transparent p-4">
                <h3 className={`${berkshire.className} text-white text-xl`}>Our Healing Space</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;