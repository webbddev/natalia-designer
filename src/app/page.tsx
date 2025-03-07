import { Footer, Header, Hero, Intro, Projects, Testimonials } from "@/sections";
import FAQs from "@/sections/FAQs";


export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <Intro/>
      <Projects/>
      <Testimonials />
      <FAQs/>
      <Footer />
    </>
  );
}
