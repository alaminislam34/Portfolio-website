import { ToastContainer } from "react-toastify";
import About from "../AboutMe/About";
import Contact from "../Contact/Contact";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import OrbitalSkillsSection from "../Skills/Skill";
import Projects from "../Projects/Projects";
// import { LucideFacebook, LucideGithub, LucideLinkedin } from "lucide-react";
// export const socialLinks = [
//   {
//     icon: <LucideLinkedin />,
//     label: "Linkedin",
//     link: "https://www.linkedin.com/in/al-amin-islam/",
//   },
//   {
//     icon: <LucideGithub />,
//     label: "Github",
//     link: "https://github.com/alaminislam34",
//   },
//   {
//     icon: <LucideFacebook />,
//     label: "Facebook",
//     link: "https://www.facebook.com/profile.php?id=61562355332943",
//   },
// ];

const Home = () => {
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
        <OrbitalSkillsSection />
      </section>
      <section id="projects" data-section="projects">
        <Projects />
      </section>
      <section id="contact" data-section="contact">
        <Contact />
      </section>
      <ToastContainer autoClose={2000} position="bottom-center" />

      {/* Social icons */}
      {/* <div className="fixed bottom-28 lg:bottom-40 right-6 lg:right-24 z-50">
        <ul
          data-aos="fade-up"
          data-aos-delay="900"
          className="flex flex-col gap-4 items-center"
        >
          {socialLinks.map(({ link, icon, label }, i) => (
            <li key={i} className="w-12 h-12 lg:w-16 lg:h-16">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-full h-full text-white inline-block rounded-full border border-white/20 shadow hover:scale-105 relative group will-change-transform transition-transform duration-500 ease-in-out overflow-hidden hover:bg-linear-to-tr from-purple-400 to-purple-600 hover:shadow-[2px_2px_6px_#623ac0]"
              >
                <div className="w-full h-full flex items-center justify-center text-xl backdrop-blur">
                  {icon}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div> */}
    </main>
  );
};

export default Home;
