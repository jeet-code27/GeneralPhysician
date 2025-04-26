import AboutUsHero from "@/components/AboutUsHero";

export default function Blog() {
    return (
        < >
 <AboutUsHero
  title="Health & Wellness Blog"
  description="Stay informed with expert tips from Dr. Manish Sharma (General Physician) and Dr. Gauri Mehra (Dietician) on managing health, nutrition, lifestyle diseases, and wellness care."
  breadcrumbs={[
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
  ]}
/>

        </>
    );
}