import About from "../AboutMe/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skill from "../Skills/Skill";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <main className="space-y-9 md:space-y-12">
      <section id="home" data-section="home">
        <Banner />
      </section>
      <section id="about" data-section="about">
        <About />
      </section>
      <section id="skills" data-section="skills">
        <Skill />
      </section>
      <section id="projects" data-section="projects">
        <Projects />
      </section>
      <section id="contact" data-section="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
