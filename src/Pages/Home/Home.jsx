import { ToastContainer } from "react-toastify";
import About from "../AboutMe/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import useMouseCursor from "../../Components/useMouseCursor";
import NeonCursor from "../../Components/useMouseCursor";
import SkillsRoadmap from "../Skills/Skill";

const Home = () => {
  const { mouse, ref } = useMouseCursor();
  return (
    <main className="space-y-9 md:space-y-12">
      <section id="home" data-section="home">
        <Banner />
      </section>
      <section>
        <Testimonials />
      </section>
      <section id="about" data-section="about">
        <About />
      </section>
      <section id="skills" data-section="skills">
        <SkillsRoadmap />
      </section>
      <section id="projects" data-section="projects">
        <Projects />
      </section>
      <section id="contact" data-section="contact">
        <Contact />
      </section>
      <ToastContainer autoClose={2000} position="bottom-center" />
      <NeonCursor />
    </main>
  );
};

export default Home;
