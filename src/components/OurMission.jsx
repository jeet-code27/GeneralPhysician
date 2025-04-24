import { Berkshire_Swash } from 'next/font/google';
import Image from 'next/image';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
});

export default function OurMission() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-16">
          <h2 className={`${berkshire.className} text-2xl sm:text-3xl md:text-5xl text-green-800 mb-3 sm:mb-4 md:mb-6`}>
            Our Mission
          </h2>
          <div className="w-16 sm:w-24 md:w-32 h-1 md:h-2 bg-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1 w-full px-4 sm:px-0">
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
              <Image 
                src="/images/our-mission.jpg" 
                alt="Health and wellness" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl shadow-xl object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-4 sm:space-y-6 md:space-y-8">
            <p className="text-sm sm:text-base md:text-xl text-gray-700 leading-relaxed">
              We believe your health is as unique as you are. Our team creates personal health plans that fit your lifestyle, combining the best of nutrition and medical care to help you feel your best every day.
            </p>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="text-lg sm:text-xl md:text-2xl text-green-700 font-semibold mb-1 sm:mb-2 md:mb-3">
                  Personalized Nutrition
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">
                  "Good food is the foundation of true happiness." We create custom meal plans based on your body's needs, preferences, and health goals to transform your relationship with food.
                </p>
              </div>
              
              <div className="bg-green-50 p-3 sm:p-4 md:p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="text-lg sm:text-xl md:text-2xl text-green-700 font-semibold mb-1 sm:mb-2 md:mb-3">
                  Holistic Healthcare
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">
                  "Health is about balance, not perfection." We provide comprehensive care that addresses your physical, mental, and emotional wellbeing for lasting health improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}