import { X } from "lucide-react";
import Title from "../../Components/Shared/Title";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Slider from "react-slick";
import user from "../../assets/logo/user.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
// import ColorPlates from "../../Components/ColorPlates";

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", overview: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, overview } = formData;
    if (!name || !overview) {
      toast.warn("Please fill out all fields.");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/postReview`,
        formData
      );

      if (res.data?.insertedId) {
        toast.success("Thanks for your feedback!", {
          style: {
            background: "linear-gradient(to right, #4b0082, #8a2be2)",
            color: "#fff",
          },
        });
        fetchFeedbacks();
        setFormData({ name: "", overview: "" });
        setOpen(false);
      }
    } catch (error) {
      console.error("Failed to submit feedback:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/reviews`);
      const data = res.data;
      if (Array.isArray(data)) {
        setFeedbacks(data);
      } else if (Array.isArray(data.reviews)) {
        setFeedbacks(data.reviews);
      } else {
        setFeedbacks([]);
      }
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    dotsClass: "slick-dots slick-thumb",
    dotsClassActive: "slick-active",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <Title
        title="Testimonials"
        des="I'd love to hear your thoughts. Feel free to leave honest feedback!"
      />
      {/* <ColorPlates /> */}
      {/* Feedback Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-[#1a0e25]/80 border border-purple-700/30 shadow-xl shadow-purple-800/20 rounded-xl max-w-xl w-full p-6 space-y-4 relative backdrop-blur-md"
          >
            <button
              onClick={() => setOpen(false)}
              type="button"
              className="btn btn-sm btn-circle bg-purple-900/50 text-white absolute right-3 top-3"
            >
              <X size={18} />
            </button>
            <h2 className="text-2xl md:text-3xl lg:text-4xl pb-4 lg:pb-6 font-bold text-purple-300 text-center mb-2">
              Give Feedback
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-transparent border border-purple-600/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              name="overview"
              rows="4"
              placeholder="Your Feedback..."
              value={formData.overview}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-transparent border border-purple-600/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-white/10 border border-white/20 py-1.5 px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10"
              >
                <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-[120%] duration-700"></div>
                <button className="py-2.5 active:scale-95 px-8 rounded-lg cursor-pointer bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden">
                  <span className="relative z-10">Submit Feedback</span>
                  <span className="absolute top-0 w-1/4 h-full -left-1/2 bg-white/20 blur-sm group-hover:left-[120%] duration-1000 transition-all ease-out z-0"></span>
                </button>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Feedback Slider */}
      <div data-aos="fade-up" className="mt-8">
        {feedbacks?.length > 0 ? (
          <Slider {...sliderSettings}>
            {feedbacks?.slice(0, 6).map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={index}
                className="px-3 py-6 relative group"
              >
                {/* Card with Shine Effect */}
                <div className="relative min-h-[300px] bg-[#1d1128]/20 rounded-2xl border border-purple-800/30 shadow-lg p-6 text-center transition hover:scale-[1.02] duration-500 overflow-hidden">
                  {/* Shine Effect */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="w-full h-full flex items-center justify-center relative p-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 10 }}
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-[40%] h-[200%] bg-gradient-to-r from-[#5e3bc9] via-[#816ead] to-[#dbd0f5] blur-3xl"
                      ></motion.div>
                      <div className="bg-black/50 backdrop-blur-xl w-full z-10 h-full rounded-xl flex flex-col items-center justify-center">
                        {/* Content */}
                        <img
                          loading="lazy"
                          src={user}
                          alt="User"
                          className="w-14 h-14 rounded-full border-2 border-purple-400 mx-auto mb-4 relative z-20"
                        />
                        <h3 className="text-lg font-semibold text-white mb-1 relative z-20">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-300 relative z-20">
                          {item.overview?.slice(0, 120)}
                        </p>
                        <p className="text-xs text-gray-500 mt-2 relative z-20">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center text-gray-500">No feedback yet.</div>
        )}
      </div>

      {/* Give Feedback Button */}
      <div data-aos="fade-up" className="flex justify-center mt-12">
        <button
          onClick={() => setOpen(true)}
          className="bg-white/10 border border-white/20 py-1.5 px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10"
        >
          <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-[120%] duration-700"></div>
          <button className="py-2.5 px-8 rounded-lg cursor-pointer bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden">
            <span className="relative z-10">Give Feedback</span>
            <span className="absolute top-0 w-1/4 h-full -left-1/2 bg-white/20 blur-sm group-hover:left-[120%] duration-1000 transition-all ease-out z-0"></span>
          </button>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
