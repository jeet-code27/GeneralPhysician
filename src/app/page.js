import AboutUsSection from "@/components/AboutUsSection";
import AppointmentSection from "@/components/AppointmentSection";
import HeroSection from "@/components/HeroSection";
import OurMission from "@/components/OurMission";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export const metadata = {
  metadataBase: new URL('https://gaurnishhealth.in'),
  title: 'Best General Physician - Dr. Manish Sharma',
  description: 'Dr. Manish Sharma (MD) and Dr. Gauri Mehra are the best General Physician and Dietician in Ajmer offering comprehensive healthcare services for complete wellness.',
  alternates: {
    canonical: 'https://gaurnishhealth.in/'
  },
  keywords: [
    'best general physician in Ajmer',
    'top dietician in Ajmer',
    'Dr. Manish Sharma Ajmer',
    'Dr. Gauri Mehra Dietician',
    'best doctors in Ajmer',
    'general physician near me',
    'nutritionist in Ajmer',
    'healthcare specialists Ajmer',
    'medical consultation Ajmer',
    'diet planning Ajmer',
    'family doctor Ajmer',
    'weight management specialist',
    'diabetes care Ajmer',
    'holistic healthcare Ajmer'
  ],
  openGraph: {
    title: 'Best General Physician and Dietician in Ajmer | Dr. Manish Sharma & Dr. Gauri Mehra',
    description: 'Dr. Manish Sharma (MD) and Dr. Gauri Mehra are Ajmer\'s top healthcare specialists offering complete medical and nutritional care',
    url: 'https://gaurnishhealth.in/',
    siteName: 'GaurNish Health',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best General Physician and Dietician in Ajmer | Dr. Manish Sharma & Dr. Gauri Mehra',
    description: 'Ajmer\'s top healthcare specialists - Dr. Manish Sharma (General Physician) and Dr. Gauri Mehra (Dietician)',
    images: ['/images/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection/>
      <ServicesSection/>
      <AboutUsSection/>
      <WhyChooseUsSection/>
      <OurMission/>
      <AppointmentSection/>
    </>
  );
}