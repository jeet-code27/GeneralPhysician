import BookingSystem from "@/components/BookingSystem";

export const metadata = {
  metadataBase: new URL('https://gaurnishhealth.in'),
  title: 'Book Consultation with Best Doctors in Ajmer | Dr. Manish Sharma & Dr. Gauri Mehra',
  description: 'Schedule an appointment online with Ajmer\'s top healthcare specialists - Dr. Manish Sharma (General Physician) and Dr. Gauri Mehra (Dietician). Easy, secure booking for consultations.',
  alternates: {
    canonical: 'https://gaurnishhealth.in/bookconsultation'
  },
  keywords: [
    'book doctor appointment Ajmer',
    'online consultation Dr. Manish Sharma',
    'dietician appointment Dr. Gauri Mehra',
    'general physician booking',
    'health consultation scheduling',
    'medical appointment system',
    'instant doctor booking',
    'Ajmer healthcare appointments',
    'e-consultation booking',
    'video call doctor appointment',
    'clinic visit scheduling',
    'emergency doctor booking',
    'nutritionist online consultation'
  ],
  openGraph: {
    title: 'Book Consultation with Best Doctors in Ajmer | Dr. Manish Sharma & Dr. Gauri Mehra',
    description: 'Secure online appointment system for Ajmer\'s leading healthcare specialists',
    url: 'https://gaurnishhealth.in/bookconsultation',
    siteName: 'GaurNish Health',
    images: [
      {
        url: '/images/booking-og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Consultation with Best Doctors in Ajmer | Dr. Manish Sharma & Dr. Gauri Mehra',
    description: 'Easy online booking system for consultations with Ajmer\'s top doctors',
    images: ['/images/booking-og-image.jpg'],
  },
};

export default function BookConsultation() { 
    return (
        <>
            <BookingSystem/>
        </>
    );
}