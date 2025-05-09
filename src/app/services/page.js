import AboutUsHero from "@/components/AboutUsHero";
import AppointmentSection from "@/components/AppointmentSection";
import ServicesSection from "@/components/ServicesSection";

export default function Services() {
  return (
    <>
    <AboutUsHero 
  title="Our Treatments" 
  description="Learn about our treatments and mission to provide exceptional care."
  breadcrumbs={[
    { label: 'Home', path: '/' },
    { label: 'Treatments', path: '/services' },
    // { label: 'Our Story', path: '/about/story' }
  ]}
/>
<ServicesSection/>
<AppointmentSection/>
    </>
  );
}