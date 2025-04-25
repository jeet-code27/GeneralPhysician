import AboutUsHero from "@/components/AboutUsHero";
import AppointmentSection from "@/components/AppointmentSection";
import ServicesSection from "@/components/ServicesSection";

export default function Services() {
  return (
    <>
    <AboutUsHero 
  title="Our Services" 
  description="Learn about our services and mission to provide exceptional care."
  breadcrumbs={[
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    // { label: 'Our Story', path: '/about/story' }
  ]}
/>
<ServicesSection/>
<AppointmentSection/>
    </>
  );
}