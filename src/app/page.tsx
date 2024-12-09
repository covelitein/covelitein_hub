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
} from "@/sections/landingPage";

export default function Home() {
  return (
    <section className="">
      <main className="bg min-h-screen pb-10">
        <Header />
        <Hero />
        <FloatingElements />
      </main>
      <section className="sm:py-20 py-10">
        <AboutUs />
      </section>
      <section className="py-10 px-3">
        <Services />
      </section>
      <section className="py-10 px-3">
        <Review />
      </section>
      <section className="py-10 px-3">
        <ProjectSlider />
      </section>
      <section className="py-10 px-3">
        <Pricing />
      </section>
      <section className="py-10 px-3">
        <Faq />
      </section>
      <section className="py-10 px-3">
        <Blogs />
      </section>
      <section className="pt-10">
        <Footer />
      </section>
    </section>
  );
}
