import AboutApproch from "@/components/AboutApproch";
import AboutDoctors from "@/components/AboutDoctors";
import AboutStory from "@/components/AboutStory";
import AboutUsHero from "@/components/AboutUsHero";
import AboutValues from "@/components/AboutValues";
import AppointmentSection from "@/components/AppointmentSection";

export const metadata = {
  metadataBase: new URL('https://gaurnishhealth.in'),
  title: 'About the Best General Physician and Dietician in Ajmer | Dr. Manish Sharma & Dr. Gauri Mehra',
  description: 'Learn about Ajmer\'s top healthcare specialists - Dr. Manish Sharma (General Physician) and Dr. Gauri Mehra (Dietician). Our story, values and medical approach.',
  keywords: [
    'about best doctors in ajmer',
    'about dr manish sharma physician',
    'about dr gauri mehra dietician',
    'healthcare approach ajmer',
    'medical values ajmer',
    'our medical philosophy',
    'patient care approach ajmer',
    'doctor qualifications ajmer',
    'healthcare team ajmer',
    'about gaurnish health',
    'medical practice history',
    'healthcare mission statement'
  ],
  alternates: {
    canonical: 'https://gaurnishhealth.in/about'
  },
  openGraph: {
    title: 'About the Best General Physician and Dietician in Ajmer | Dr. Manish Sharma & Dr. Gauri Mehra',
    description: 'Learn about Ajmer\'s top healthcare specialists - Dr. Manish Sharma (General Physician) and Dr. Gauri Mehra (Dietician). Our story, values and medical approach.',
    url: 'https://gaurnishhealth.in/about',
    siteName: 'GaurNish Health',
    images: [
      {
        url: '/images/about-og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About the Best General Physician and Dietician in Ajmer | Dr. Manish Sharma & Dr. Gauri Mehra',
    description: 'Discover the story behind Ajmer\'s premier healthcare providers - Dr. Manish Sharma and Dr. Gauri Mehra',
    images: ['/images/about-og-image.jpg'],
  },
};

export default function About() {
    return(
        <>
            <AboutUsHero/>
            <AboutStory/>
            <AboutApproch/>
            <AboutValues/>
            <AboutDoctors/>
            <AppointmentSection/>
        </>
    );
}