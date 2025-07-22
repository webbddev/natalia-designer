import {
  FAQs,
  Footer,
  Header,
  Hero,
  Intro,
  Projects,
  Testimonials,
  Testimonials_NoImage,
} from "@/sections";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Intro />
      <Projects />
      <Testimonials_NoImage />
      {/* <Testimonials /> */}
      <FAQs />
      <Footer />
    </>
  );
}
