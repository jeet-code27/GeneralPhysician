import Footer from "@/components/layout/Footer";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import FloatingContact from "@/components/FloatingContact";

export const metadata = {
  metadataBase: new URL('https://gaurnishhealth.in'),
  title: 'Best General Physician and Dietician in Ajmer | Dr. Manish Sharma & Dr. Gauri Mehra',
  description: 'Best General Physician and Dietician in Ajmer - Dr. Manish Sharma (MD) and Dr. Gauri Mehra. Comprehensive healthcare services for complete wellness.',
  keywords: [
    'best general physician in ajmer',
    'top dietician in ajmer',
    'dr manish sharma ajmer',
    'dr gauri mehra dietician',
    'best doctors in ajmer',
    'general physician near me',
    'nutritionist in ajmer',
    'healthcare specialists ajmer',
    'medical consultation ajmer',
    'diet planning ajmer',
    'family doctor ajmer',
    'weight management specialist',
    'diabetes care ajmer',
    'holistic healthcare ajmer'
  ],
  openGraph: {
    title: 'Best General Physician and Dietician in Ajmer | Dr. Manish Sharma & Dr. Gauri Mehra',
    description: 'Best General Physician and Dietician in Ajmer - Dr. Manish Sharma (MD) and Dr. Gauri Mehra. Premier healthcare services in Ajmer.',
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
    description: 'Best General Physician and Dietician in Ajmer - Dr. Manish Sharma and Dr. Gauri Mehra. Your trusted healthcare partners in Ajmer.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Navbar/>
        <main>{children}</main>
        <FloatingContact/>
        <Footer />
      </body>
    </html>
  );
}