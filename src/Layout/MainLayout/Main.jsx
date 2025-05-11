import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
// import GradientBackground from "../../Components/MatrixRain/Matrix";
import { ToastContainer } from "react-toastify";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
// import tten from "../../assets/Image/ttten.svg";
import AnimatedBackground from "../../Components/AnimatedBackground";

const Main = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={` overflow-hidden relative`}>
      {/* <img
        // src={tten}
        alt="bg"
        className="w-full h-screen fixed top-0 left-0 -z-0 object-cover bg-cover pointer-events-none"
      /> */}
      <Navbar />
      <section className="max-w-7xl w-11/12 mx-auto min-h-[75vh] mb-12">
        <Outlet />
      </section>
      <Footer />
      <AnimatedBackground />
      {/* <GradientBackground /> */}
      <ToastContainer autoClose={3000} hideProgressBar={true} />
      <div className="relative">
        <div
          className={`fixed bottom-4 right-4 z-50 lg:right-6 lg:bottom-8  bg-gradient-to-br from-fuchsia-900/70 to-fuchsia-500/40 p-3 rounded-full ${
            show ? "block" : "hidden"
          }`}
        >
          <Link to="home" smooth={true} duration={500}>
            <FaChevronUp className="text-2xl cursor-pointer" />
          </Link>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/50 filter blur-[5px] h-2 rounded-[50%] w-[90%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
