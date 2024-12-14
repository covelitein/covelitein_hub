import { ProjectSlider } from "@/components/project-slider/ProjectSlider";
import {
  AboutUs,
  Blogs,
  Faq,
  FloatingElements,
  Footer,
  Header,
  Hero,
  Pricing,
  Review,
  Services,
  TechStacks,
} from "@/sections/landingPage";
import FluidCursor from "@/sections/landingPage/FluidCursor";

export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <main className="bg min-h-screen pb-10 relative">
        <Header />
        <Hero />
        <FloatingElements />
        {/* <FluidCursor /> */}
      </main>
      <section className="sm:py-20 py-10 sm:px-5">
        <AboutUs />
      </section>
      <section className="py-10 sm:px-5 px-4">
        <Services />
      </section>
      <section className="py-10 sm:px-5 px-4">
        <Review />
      </section>
      <section className="py-10 sm:px-5 px-4">
        <ProjectSlider />
      </section>
      <section className="py-10 sm:px-5 px-4">
        <Pricing />
      </section>
      <main className="py-10 bg-gradient-to-br from-blue-50 via-blue-300 to-blue-600">
        <TechStacks />
      </main>
      <section className="py-10 sm:px-5 px-4">
        <Faq />
      </section>
      <section className="py-10 sm:px-5 px-4">
        <Blogs />
      </section>
      <section className="pt-10">
        <Footer />
      </section>
    </section>
  );
}
