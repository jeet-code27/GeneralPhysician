// pages/services/specialized-treatment.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Berkshire_Swash } from 'next/font/google';
import AppointmentSection from '@/components/AppointmentSection';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  metadataBase: new URL('https://gaurnishhealth.in'),
  title: 'Best Diabetes, Heart & Respiratory Care in Ajmer | Dr. Manish Sharma',
  description: 'Expert specialized treatment for diabetes, hypertension, heart conditions & respiratory diseases in Ajmer by top general physician Dr. Manish Sharma. Personalized care plans for complex health issues.',
  alternates: {
    canonical: 'https://gaurnishhealth.in/services/specialized-treatment'
  },
  keywords: [
    'best specialized treatment Ajmer',
    'diabetes doctor in Ajmer',
    'heart specialist in Ajmer',
    'high blood pressure treatment',
    'respiratory disease specialist',
    'Dr. Manish Sharma general physician',
    'chronic disease management Ajmer',
    'best doctor for diabetes in Ajmer',
    'hypertension specialist near me',
    'asthma treatment Ajmer',
    'COPD care Ajmer',
    'mental health counseling Ajmer',
    'digestive problems treatment',
    'top general physician for specialized care',
    'Ajmer medical specialist',
    'comprehensive disease management',
    'personalized treatment plans',
    'experienced physician Ajmer'
  ],
  openGraph: {
    title: 'Best Specialized Treatment in Ajmer | Diabetes, Heart & Respiratory Care | Dr. Manish Sharma',
    description: 'Expert specialized treatment for chronic conditions in Ajmer by top general physician Dr. Manish Sharma. Personalized care for diabetes, heart and respiratory diseases.',
    url: 'https://gaurnishhealth.in/services/specialized-treatment',
    siteName: 'GaurNish Health',
    images: [
      {
        url: '/images/specialized-treatment-og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Specialized Treatment in Ajmer | Diabetes, Heart & Respiratory Care | Dr. Manish Sharma',
    description: 'Expert specialized treatment for chronic conditions in Ajmer by top general physician Dr. Manish Sharma. Personalized care for diabetes, heart and respiratory diseases.',
    images: ['/images/specialized-treatment-og-image.jpg'],
  },
};

export default function SpecializedTreatment() {
  return (
    <>
      <Head>
        <title>Specialized Treatment in Ajmer | Best General Physician Services</title>
        <meta name="description" content="Get expert specialized treatment for diabetes, blood pressure, cardiac problems, respiratory issues and more from Ajmer's top general physician" />
      </Head>

      {/* Hero Section with background */}
      <div className="relative bg-[#f5f9f0] md:py-28 py-24 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/leaf-bg.avif"
            alt="Leaf background"
            fill
            className="object-fit"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex text-sm text-[#2d5134]/70 mb-6">
            <Link href="/" className="hover:text-[#2d5134]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-[#2d5134]">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-[#2d5134]">Specialized Treatment</span>
          </div>
          
          <h1 className={`${berkshire.className} text-4xl md:text-5xl lg:text-6xl text-[#2d5134] mb-6`}>
            Specialized Treatment
          </h1>
          
          <p className="text-lg text-[#2d5134]/80 max-w-3xl">
            Expert care for health problems like diabetes, high blood pressure, and heart conditions from Ajmer&apos;s top general physician with easy-to-follow treatment plans.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-lg overflow-hidden mb-8">
              <Image 
                src="/images/specialized-treatment.webp" 
                alt="Specialized Treatment Services in Ajmer" 
                width={800} 
                height={500} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <section>
              <h2 className={`${berkshire.className} text-3xl text-[#2d5134] mb-4`}>
                What is Specialized Treatment?
              </h2>
              <p className="text-gray-700 mb-4">
                Specialized treatment means getting care that is focused on your specific health problem. Our clinic in Ajmer offers expert care for many common health issues that need special attention, like diabetes, high blood pressure, and breathing problems.
              </p>
              <p className="text-gray-700 mb-4">
                Dr. Manish Sharma, the top general physician in Ajmer, creates easy-to-understand treatment plans that work with your daily life. We explain everything in simple words so you know exactly what is happening with your health and how to get better.
              </p>
            </section>

            <section>
              <h2 className={`${berkshire.className} text-3xl text-[#2d5134] mb-4`}>
                Health Problems We Treat
              </h2>
              
              <div className="space-y-6">
                <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                  <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Diabetes Care</h3>
                  <p className="text-gray-700">
                    Complete care for all types of diabetes. We help track blood sugar, adjust medicines, give diet advice, and prevent problems with regular check-ups of feet and eyes.
                  </p>
                </div>
                
                <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                  <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Blood Pressure & Heart Problems</h3>
                  <p className="text-gray-700">
                    Expert treatment for high blood pressure, heart disease, and high cholesterol. We give the right medicines and suggest diet and exercise changes to keep your heart healthy.
                  </p>
                </div>
                
                <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                  <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Breathing Problems</h3>
                  <p className="text-gray-700">
                    Treatment for asthma, COPD, and other breathing issues. We help manage your medicines, teach breathing exercises, and share tips to avoid things that make breathing hard.
                  </p>
                </div>
                
                <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                  <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Mental Health Concerns</h3>
                  <p className="text-gray-700">
                    Caring support for stress, anxiety, depression, and sleep problems. We provide counseling, medicines when needed, and simple ways to improve your mental wellbeing.
                  </p>
                </div>

                <div className="bg-[#f5f9f0] p-6 rounded-lg border-l-4 border-[#2d5134]">
                  <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Stomach and Digestive Issues</h3>
                  <p className="text-gray-700">
                    Care for stomach pain, digestion problems, liver issues, and other abdominal health concerns. We create treatment plans to reduce discomfort and improve digestive health.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className={`${berkshire.className} text-3xl text-[#2d5134] mb-4`}>
                How We Provide Treatment
              </h2>
              <p className="text-gray-700 mb-4">
                As the best general physician team in Ajmer, we believe in working with you to manage your health. Our approach includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Full check-up to understand your health problem properly</li>
                <li>Clear explanation of your condition in easy words</li>
                <li>Medicine plans that are simple to follow</li>
                <li>Health advice that works with your daily life</li>
                <li>Diet suggestions that are easy to find and make in Ajmer</li>
                <li>Help with setting small health goals you can achieve</li>
                <li>Follow-up visits to check your progress</li>
                <li>Family education so your loved ones can support you</li>
              </ul>
            </section>
            
            <section>
              <h2 className={`${berkshire.className} text-3xl text-[#2d5134] mb-4`}>
                Benefits of Our Specialized Care
              </h2>
              <p className="text-gray-700 mb-4">
                Patients who come to our clinic in Ajmer often experience:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Fewer emergency visits to the hospital</li>
                <li>Better control of pain and other symptoms</li>
                <li>More energy for daily activities</li>
                <li>Often needing less medicine over time</li>
                <li>Better overall health and happiness</li>
                <li>More confidence in taking care of their own health</li>
                <li>Improved test results and health measurements</li>
              </ul>
            </section>

            <section>
              <h2 className={`${berkshire.className} text-3xl text-[#2d5134] mb-4`}>
                Why Choose Us for Specialized Treatment in Ajmer
              </h2>
              <p className="text-gray-700 mb-4">
                Dr. Manish Sharma is known as one of the top general physicians in Ajmer with over 15 years of experience. He takes time to listen to your worries and explains everything in simple language that anyone can understand.
              </p>
              <p className="text-gray-700 mb-4">
                Our clinic offers personal care that fits your needs, convenient appointment times, and a friendly team that remembers you. We make healthcare easy and accessible for everyone in Ajmer and nearby areas.
              </p>
              <p className="text-gray-700 mb-4">
                Unlike big hospitals where you might see different doctors each time, we provide consistent care from the same trusted doctor who knows your complete health history.
              </p>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
  {/* Book Appointment Card with Improved Design */}
  <div className="bg-gradient-to-br from-[#2d5134] to-[#1d3422] text-white p-6 rounded-lg mb-8 shadow-lg">
    <h3 className={`${berkshire.className} text-2xl mb-4`}>
      Start Your Health Journey
    </h3>
    <div className="flex items-center mb-5 bg-white/10 p-3 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#eb7147] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
      <p className="text-sm">
        Receive a <span className="font-bold">personalized health plan</span> tailored to your medical needs and lifestyle
      </p>
    </div>
    <div className="flex items-center mb-6 bg-white/10 p-3 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#eb7147] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-sm">
        <span className="font-bold">15-minute consultation</span> with Dr. Manish to assess your needs
      </p>
    </div>
    <button className="w-full bg-[#eb7147] hover:bg-[#d15e37] text-white py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center font-bold shadow-md">
      Book Consultation
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
  
  {/* Doctor Info with Improved Visual Design */}
  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8 shadow-md">
    <h3 className={`${berkshire.className} text-2xl text-[#2d5134] mb-4`}>
      Meet Your Expert
    </h3>
    <div className="flex flex-col items-center mb-4 relative">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#f5f9f0] shadow-md">
        <Image 
          src="/images/dr-manish.jpg" 
          alt="Dr. Manish Sharma - Best General Physician in Ajmer" 
          width={128} 
          height={128}
          className="w-full h-full object-cover" 
        />
      </div>
      
      <h4 className="text-xl font-semibold text-[#2d5134]">Dr. Manish Sharma</h4>
      <p className="text-gray-600">General Physician</p>
      <div className="flex items-center mt-2 text-yellow-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
    </div>
    <div className="border-t border-gray-200 pt-4 space-y-3">
      <div className="flex items-center">
        <div className="bg-[#f5f9f0] p-2 rounded-full mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-500">Experience</p>
          <p className="font-semibold text-[#2d5134]">15+ years</p>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="bg-[#f5f9f0] p-2 rounded-full mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-500">Specialization</p>
          <p className="font-semibold text-[#2d5134]">Preventive & General Medicine</p>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="bg-[#f5f9f0] p-2 rounded-full mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-500">Patients Served</p>
          <p className="font-semibold text-[#2d5134]">5000+</p>
        </div>
      </div>
      
      <Link href="/about" className="mt-4 inline-flex items-center text-white bg-[#eb7147] hover:bg-[#d15e37] px-4 py-2 rounded-lg transition duration-300 text-sm font-semibold">
        View Full Profile
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  </div>
  
  {/* Testimonial Section */}
  <div className="bg-[#f5f9f0] p-6 rounded-lg mb-8 shadow-md border border-[#2d5134]/20">
    <h3 className={`${berkshire.className} text-2xl text-[#2d5134] mb-4`}>
      Patient Success Stories
    </h3>
    <div className="relative py-3 px-4 bg-white rounded-lg mb-4 shadow-sm">
      <div className="absolute -top-3 -left-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb7147]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 italic pt-2">
      &quot;Dr. Sharma&apos;s comprehensive approach to my diabetes management completely transformed my health. His preventive strategies helped me avoid complications I didn&apos;t even know I was at risk for.&quot;
      </p>
      <div className="flex items-center mt-3">
        <div className="h-8 w-8 rounded-full bg-[#2d5134] text-white flex items-center justify-center font-bold mr-2">
          R
        </div>
        <div>
          <p className="font-semibold text-sm text-[#2d5134]">Ramesh K.</p>
          <p className="text-xs text-gray-500">Diabetes Management</p>
        </div>
      </div>
    </div>
  </div>
  
  {/* Other Services */}
  <div className="bg-white p-6 rounded-lg mb-8 shadow-md border border-gray-200">
    <h3 className={`${berkshire.className} text-2xl text-[#2d5134] mb-4`}>
      Our Services
    </h3>
    <ul className="divide-y divide-gray-100">
      <li className="py-3">
        <Link href="/services/chronic-disease-management" className="flex items-center text-gray-700 hover:text-[#eb7147] transition duration-300 group">
          <div className="bg-[#f5f9f0] group-hover:bg-[#eb7147]/10 p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134] group-hover:text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <p className="font-medium">Chronic Disease Management</p>
            <p className="text-xs text-gray-500">Specialized care for long-term conditions</p>
          </div>
        </Link>
      </li>
      <li className="py-3">
        <Link href="/services/specialized-treatment" className="flex items-center text-gray-700 hover:text-[#eb7147] transition duration-300 group">
          <div className="bg-[#f5f9f0] group-hover:bg-[#eb7147]/10 p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134] group-hover:text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <p className="font-medium">Specialized Treatment</p>
            <p className="text-xs text-gray-500">Advanced care for complex conditions</p>
          </div>
        </Link>
      </li>
      <li className="py-3">
        <Link href="/services/nutrition-counseling" className="flex items-center text-gray-700 hover:text-[#eb7147] transition duration-300 group">
          <div className="bg-[#f5f9f0] group-hover:bg-[#eb7147]/10 p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134] group-hover:text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div>
            <p className="font-medium">Nutrition Counseling</p>
            <p className="text-xs text-gray-500">Expert guidance for better eating habits</p>
          </div>
        </Link>
      </li>
      <li className="py-3">
        <Link href="/services/meal-planning" className="flex items-center text-gray-700 hover:text-[#eb7147] transition duration-300 group">
          <div className="bg-[#f5f9f0] group-hover:bg-[#eb7147]/10 p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134] group-hover:text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
          <div>
            <p className="font-medium">Meal Planning</p>
            <p className="text-xs text-gray-500">Customized weekly/monthly meal plans</p>
          </div>
        </Link>
      </li>
      <li className="py-3">
        <Link href="/services/weight-management" className="flex items-center text-gray-700 hover:text-[#eb7147] transition duration-300 group">
          <div className="bg-[#f5f9f0] group-hover:bg-[#eb7147]/10 p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2d5134] group-hover:text-[#eb7147]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
          <div>
            <p className="font-medium">Weight Management</p>
            <p className="text-xs text-gray-500">Personalized weight loss/gain programs</p>
          </div>
        </Link>
      </li>
    </ul>
  </div>
  
  {/* Quick Contact */}
  <div className="bg-gradient-to-br from-[#eb7147] to-[#d15e37] p-6 rounded-lg shadow-lg text-white">
    <h3 className={`${berkshire.className} text-2xl mb-4`}>
      Have Questions?
    </h3>
    <div className="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <p>+91 86907 61918</p>
    </div>
    <div className="flex items-center mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <p>gaurnishhealth@gmail.com</p>
    </div>
    <button className="w-full bg-white text-[#eb7147] hover:bg-gray-100 py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center font-semibold">
      Contact Us
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
</div>
        </div>
      </div>
      
      {/* CTA Section */}
     <AppointmentSection/>
      
      {/* FAQ Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className={`${berkshire.className} text-4xl text-[#2d5134] mb-10 text-center`}>
          Common Questions
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">How long will my treatment take?</h3>
            <p className="text-gray-700">
              This depends on your health problem. Some issues can improve in a few weeks, while others need longer care. Dr. Manish Sharma, Ajmer&apos;s top general physician, will tell you what to expect during your first visit.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Do I need to bring my old medical reports?</h3>
            <p className="text-gray-700">
              Yes, please bring any test reports, medicine lists, or doctor notes you have. These help us understand your health history better and avoid repeating tests you&apos;ve already done.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">How much will the treatment cost?</h3>
            <p className="text-gray-700">
              We keep our fees fair and affordable for everyone in Ajmer. The cost depends on your specific health needs. We&apos;ll discuss all costs clearly before starting any treatment, and we offer payment plans if needed.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-[#2d5134] mb-2">Can I contact the doctor between appointments?</h3>
            <p className="text-gray-700">
              Yes, we understand that questions come up between visits. Our patients can call our clinic with urgent concerns. Dr. Sharma, the best general physician in Ajmer, makes himself available for his patients.
            </p>
          </div>
          
         
        </div>
      </div>
    </>
  );
}