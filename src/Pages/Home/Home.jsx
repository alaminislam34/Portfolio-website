import { ToastContainer } from "react-toastify";
import About from "../AboutMe/About";
import Contact from "../Contact/Contact";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import OrbitalSkillsSection from "../Skills/Skill";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <main className="space-y-9 md:space-y-12">
      <section
        className="max-w-[1400px] w-11/12 mx-auto"
        id="home"
        data-section="home"
      >
        <Banner />
      </section>
      <section className="max-w-[1400px] w-11/12 mx-auto">
        <Testimonials />
      </section>
      <section
        className="max-w-[1400px] w-11/12 mx-auto"
        id="about"
        data-section="about"
      >
        <About />
      </section>
      <section
        className="max-w-[1400px] w-11/12 mx-auto"
        id="skills"
        data-section="skills"
      >
        <OrbitalSkillsSection />
      </section>
      <section id="projects" data-section="projects">
        <Projects />
      </section>
      <section
        className="max-w-[1400px] w-11/12 mx-auto"
        id="contact"
        data-section="contact"
      >
        <Contact />
      </section>
      <ToastContainer autoClose={2000} position="bottom-center" />
    </main>
  );
};

export default Home;
