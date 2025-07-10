// ✅ Testimonials.jsx
import { X } from "lucide-react";
import Title from "../../Components/Shared/Title";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Slider from "react-slick";
// import { motion } from "motion/react";

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
        { ...formData, verified: false }
      );

      if (res.data?.insertedId) {
        toast.success("Thanks for your feedback!", {
          style: {
            background: "linear-gradient(to right, #4b0082, #8a2be2)",
            color: "#fff",
          },
        });

        // Store this ID locally so the user sees their feedback
        const existing = JSON.parse(
          localStorage.getItem("myFeedbacks") || "[]"
        );
        localStorage.setItem(
          "myFeedbacks",
          JSON.stringify([...existing, res.data.insertedId])
        );

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
      const myIds = JSON.parse(localStorage.getItem("myFeedbacks") || "[]");

      const feedbackArray = Array.isArray(data) ? data : data.reviews || [];

      const filtered = feedbackArray.filter(
        (item) => item.verified === true || myIds.includes(item._id)
      );

      setFeedbacks(filtered);
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
    <div className="py-12">
      <Title
        title="Testimonials"
        des="I'd love to hear your thoughts. Feel free to leave honest feedback!"
      />

      {/* Feedback Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-[#1a0e25]/80 border border-purple-700/30 shadow-xl rounded-xl max-w-xl w-full p-6 space-y-4 relative backdrop-blur-md"
          >
            <button
              onClick={() => setOpen(false)}
              type="button"
              className="btn btn-sm btn-circle bg-purple-900/50 text-white absolute right-3 top-3"
            >
              <X size={18} />
            </button>
            <h2 className="text-3xl font-bold text-purple-300 text-center mb-4">
              Give Feedback
            </h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-purple-600/20 text-white"
              required
            />
            <textarea
              name="overview"
              rows="4"
              value={formData.overview}
              onChange={handleChange}
              placeholder="Your Feedback..."
              className="w-full px-4 py-2 rounded-md bg-transparent border border-purple-600/20 text-white"
              required
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-2.5 px-8 rounded-lg bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Feedback Slider */}
      <div className="mt-10">
        {feedbacks?.length > 0 ? (
          <Slider {...sliderSettings}>
            {feedbacks.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="relative w-[190px] h-[254px] transition duration-200 select-none group"
              >
                {/* Canvas */}
                <div className="absolute inset-0 z-[200] grid grid-cols-5 grid-rows-5">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-full h-full z-[200] hover:cursor-pointer tracker tr-${
                        i + 1
                      }`}
                    />
                  ))}
                </div>

                {/* Card */}
                <div
                  id="card"
                  className="absolute inset-0 z-0 flex justify-center items-center rounded-[20px] transition duration-[700ms] border-2 border-white/10 overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#262626] shadow-[0_0_20px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(0,0,0,0.2)]"
                >
                  <div className="relative w-full h-full">
                    {/* Glare */}
                    <div className="card-glare absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(125deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.05)_55%,rgba(255,255,255,0)_100%)]"></div>

                    {/* Cyber Lines */}
                    <div className="cyber-lines">
                      {[...Array(4)].map((_, i) => (
                        <span
                          key={i}
                          className={`absolute w-full h-[1px] bg-[linear-gradient(90deg,transparent,rgba(92,103,255,0.2),transparent)] animate-[lineGrow_3s_linear_infinite]`}
                          style={{
                            top: `${20 * (i + 1)}%`,
                            animationDelay: `${i * 0.5}s`,
                            transformOrigin: i % 2 === 0 ? "left" : "right",
                          }}
                        ></span>
                      ))}
                    </div>

                    {/* Prompt */}
                    <p
                      id="prompt"
                      className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 text-center text-[16px] font-semibold tracking-[2px] text-white/70 transition duration-300 text-shadow-[0_0_10px_rgba(255,255,255,0.3)] z-20 group-hover:opacity-0"
                    >
                      {item.overview?.slice(0, 70)}
                    </p>

                    {/* Title */}
                    <div className="title opacity-0 group-hover:opacity-100 transition duration-300 absolute text-[28px] font-extrabold tracking-[4px] text-center w-full pt-5 bg-gradient-to-r from-[#00ffaa] to-[#00a2ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,170,0.3)] text-shadow-[0_0_10px_rgba(92,103,255,0.5),0_0_20px_rgba(92,103,255,0.3)]">
                      {item.name}
                    </div>

                    {/* Subtitle */}
                    <div className="absolute bottom-10 w-full text-center text-[12px] tracking-[2px] translate-y-[30px] text-white/60 group-hover:hidden transition-all duration-500">
                      <span>{item.name}</span>
                    </div>

                    {/* Glowing Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute w-[100px] h-[100px] bg-[radial-gradient(circle,rgba(0,255,170,0.3)_0%,rgba(0,255,170,0)_70%)] blur-[15px] rounded-full top-[-20px] left-[-20px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute w-[100px] h-[100px] bg-[radial-gradient(circle,rgba(0,255,170,0.3)_0%,rgba(0,255,170,0)_70%)] blur-[15px] rounded-full top-1/2 right-[-30px] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute w-[100px] h-[100px] bg-[radial-gradient(circle,rgba(0,255,170,0.3)_0%,rgba(0,255,170,0)_70%)] blur-[15px] rounded-full bottom-[-20px] left-[30%] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Particles */}
                    <div className="absolute inset-0">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <span
                          key={i}
                          className="absolute w-[3px] h-[3px] bg-[#00ffaa] rounded-full opacity-0 animate-[particleFloat_2s_infinite]"
                        ></span>
                      ))}
                    </div>

                    {/* Corner Elements */}
                    <div className="absolute inset-0">
                      <span className="absolute w-[15px] h-[15px] border-2 border-[#5c67ff4d] top-[10px] left-[10px] border-r-0 border-b-0 transition-all"></span>
                      <span className="absolute w-[15px] h-[15px] border-2 border-[#5c67ff4d] top-[10px] right-[10px] border-l-0 border-b-0 transition-all"></span>
                      <span className="absolute w-[15px] h-[15px] border-2 border-[#5c67ff4d] bottom-[10px] left-[10px] border-r-0 border-t-0 transition-all"></span>
                      <span className="absolute w-[15px] h-[15px] border-2 border-[#5c67ff4d] bottom-[10px] right-[10px] border-l-0 border-t-0 transition-all"></span>
                    </div>

                    {/* Scan Line */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(92,103,255,0.1),transparent)] animate-[scanMove_2s_linear_infinite] transform -translate-y-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500">No feedback yet.</p>
        )}
      </div>

      {/* Give Feedback Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => setOpen(true)}
          className="py-2.5 px-8 rounded-lg bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white"
        >
          Give Feedback
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
