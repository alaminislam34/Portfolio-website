// ✅ Testimonials.jsx
import { X } from "lucide-react";
import Title from "../../Components/Shared/Title";
import { useState } from "react";
import Slider from "react-slick";
// ✅ Static data
const staticFeedbacks = [
  {
    _id: "1",
    name: "MD Al Amin Islam",
    overview:
      "Amazing experience working with this platform! Highly recommended.",
  },
  {
    _id: "2",
    name: "MD Abdullah Hossain",
    overview: "The UI is very friendly and performance is top-notch.",
  },
  {
    _id: "3",
    name: "Rufayed Ahmed",
    overview: "I had an excellent time using this service. Great support!",
  },
  {
    _id: "4",
    name: "Anisha Tabassum",
    overview: "Impressive work. Everything was smooth and clear. Loved it!",
  },
  {
    _id: "5",
    name: "Rony Ahmed",
    overview: "Highly advanced system with clean design and powerful features.",
  },
  {
    _id: "6",
    name: "Badhon Hossain",
    overview: "Professional and trustworthy service. Will use again.",
  },
];

// import { motion } from "motion/react";

const Testimonials = () => {
  const [feedbacks] = useState(staticFeedbacks); // ✅ Static data assign

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", overview: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit functionality kept but will not save anywhere
    alert("Feedback feature is disabled in static mode.");
    setFormData({ name: "", overview: "" });
    setOpen(false);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
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
               data-aos="fade-up"
                key={index}
                className="relative h-[254px] transition duration-200 select-none group"
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
                <div className="absolute mx-6 inset-0 z-0 flex justify-center items-center rounded-[20px] transition duration-[700ms] border-2 border-white/10 overflow-hidden bg-gradient-to-br from-[#280550]/5 to-[#280550]/10 shadow-[0_0_20px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-xs">
                  <div className="relative w-full h-full">
                    {/* Glare */}
                    <div className="card-glare absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(125deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.05)_55%,rgba(255,255,255,0)_100%)]"></div>

                    {/* Cyber Lines */}
                    <div className="cyber-lines">
                      {[...Array(4)].map((_, i) => (
                        <span
                          key={i}
                          className="absolute w-full h-[1px] bg-[linear-gradient(90deg,transparent,rgba(92,103,255,0.2),transparent)] animate-[lineGrow_3s_linear_infinite]"
                          style={{
                            top: `${20 * (i + 1)}%`,
                            animationDelay: `${i * 0.5}s`,
                            transformOrigin: i % 2 === 0 ? "left" : "right",
                          }}
                        ></span>
                      ))}
                    </div>

                    {/* Feedback (Overview) – Always visible */}
                    <p className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 text-center text-[16px] font-semibold tracking-[2px] text-white/70 transition duration-300 text-shadow-[0_0_10px_rgba(255,255,255,0.3)] z-20">
                      {item.overview?.slice(0, 70)}
                    </p>

                    {/* Name (Static Position, not hover dependent) */}
                    <div className="absolute top-5 w-full text-center text-xl font-bold tracking-[2px] text-transparent bg-gradient-to-r from-[#8d56c0] to-[#8535c7] bg-clip-text">
                      {item.name}
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
                          className="absolute w-[3px] h-[3px] bg-[#8d56c0] rounded-full opacity-0 animate-[particleFloat_2s_infinite]"
                        ></span>
                      ))}
                    </div>

                    {/* Corner Elements */}
                    <div className="absolute inset-0">
                      <span className="absolute w-[15px] h-[15px] border-2 border-[#8d5cff4d] top-[10px] left-[10px] border-r-0 border-b-0 transition-all"></span>
                      <span className="absolute w-[15px] h-[15px] border-2 border-[#8d5cff4d] top-[10px] right-[10px] border-l-0 border-b-0 transition-all"></span>
                      <span className="absolute w-[15px] h-[15px] border-2 border-[#8d5cff4d] bottom-[10px] left-[10px] border-r-0 border-t-0 transition-all"></span>
                      <span className="absolute w-[15px] h-[15px] border-2 border-[#8d5cff4d] bottom-[10px] right-[10px] border-l-0 border-t-0 transition-all"></span>
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
    </div>
  );
};

export default Testimonials;
