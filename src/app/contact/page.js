import AboutUsHero from "@/components/AboutUsHero";

export default function Contact() { 
    return (
       <>   
       <AboutUsHero
  title="Contact Us"
  description="Get in touch with Dr. Manish Sharma (General Physician) and Dr. Gauri Mehra (Dietician) for expert healthcare and personalized nutrition counselling. We are here to support your wellness journey."
  breadcrumbs={[
    { label: 'Home', path: '/' },
    { label: 'Contact Us', path: '/contact' },
  ]}
/>

           </>
    );
}