"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Berkshire_Swash } from 'next/font/google';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const floatAnimation = {
  hidden: { y: 0 },
  visible: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const AppointmentSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="relative bg-[#E7EECD] pt-20 pb-24 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 overflow-hidden" ref={ref}>
      {/* Floating leaves in background */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/leaf-bg.avif" 
          alt="Leaf background"
          fill
          className="object-fit"
          priority
        />
      </motion.div>
      
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          {/* Left side with stethoscope image */}
          <motion.div 
            className="flex justify-center md:justify-end relative z-10"
            initial="hidden"
            animate={controls}
            variants={slideInFromLeft}
          >
            <motion.div 
              className="relative"
              variants={floatAnimation}
            >
              <Image
                src="/images/stethoscope.png" 
                alt="3D Stethoscope"
                width={400}
                height={400}
                className="w-64 md:w-80 lg:w-96"
              />
            </motion.div>
          </motion.div>
          
          {/* Right side with text and button */}
          <motion.div 
            className="text-center md:text-left relative z-20"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            {/* Section heading */}
            <motion.h2 
              className={`${berkshire.className} text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d5134] mb-4 md:mb-5 leading-tight`}
              variants={fadeInUp}
            >
              Start Your Wellness Journey Today
            </motion.h2>
              
            {/* Description Text */}
            <motion.p 
              className="text-base md:text-lg text-[#2d5134] opacity-90 mb-6 md:mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Take the first step towards better health with personalized care from our expert team. Schedule your consultation now and embark on a transformative health experience.
            </motion.p>
              
            {/* CTA Button */}
            <motion.div 
              className="mb-4 md:mb-0"
              variants={fadeInUp}
            >
              <Link
                href="/bookconsultation"
                className="inline-flex items-center justify-center cursor-pointer px-6 py-2 md:px-8 md:py-3 bg-[#eb7147] hover:bg-[#d15e37] text-white text-base md:text-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg rounded-sm"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book An Appointment Today
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Fruits */}
      <motion.div 
        className="absolute bottom-0 left-0 z-0"
        variants={floatAnimation}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
      >
        {/* <Image
          src="/images/fruit3.png" 
          alt="Strawberries"
          width={220}
          height={180}
          className="w-40 md:w-56 lg:w-64"
        /> */}
      </motion.div>

      <motion.div 
        className="absolute top-0 right-0 z-0"
        variants={floatAnimation}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
      >
        {/* <Image
          src="/images/leftfruit.avif" 
          alt="Grapefruit"
          width={180}
          height={180}
          className="w-36 md:w-44 lg:w-52"
        /> */}
      </motion.div>
    </section>
  );
};

export default AppointmentSection;