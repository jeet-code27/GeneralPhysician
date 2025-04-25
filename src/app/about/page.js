import AboutApproch from "@/components/AboutApproch";
import AboutDoctors from "@/components/AboutDoctors";
import AboutStory from "@/components/AboutStory";
import AboutUsHero from "@/components/AboutUsHero";
import AboutValues from "@/components/AboutValues";
import AppointmentSection from "@/components/AppointmentSection";


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