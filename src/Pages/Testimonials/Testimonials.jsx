import { X } from "lucide-react";
import Title from "../../Components/Shared/Title";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Slider from "react-slick";
import user from "../../assets/logo/user.png";
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
    autoplaySpeed: 5000,
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
              <button type="submit" className="buttonClass group">
                Submit Feedback
                <span className="buttonAnimationColor"></span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Feedback Slider */}
      <div className="mt-8">
        {feedbacks.length > 0 ? (
          <Slider {...sliderSettings}>
            {feedbacks.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={index}
                className="px-3 py-6"
              >
                <div className="bg-[#1d1128]/20 rounded-2xl border border-purple-800/30 shadow-lg p-6 text-center transition hover:scale-[1.02] duration-300">
                  <img
                    src={user}
                    alt="User"
                    className="w-14 h-14 rounded-full border-2 border-purple-400 mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {item.overview?.slice(0, 120)}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center text-gray-500">No feedback yet.</div>
        )}
      </div>

      {/* Give Feedback Button */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex justify-center mt-12"
      >
        <button onClick={() => setOpen(true)} className="buttonClass group">
          Give Feedback
          <span className="buttonAnimationColor group-hover:-top-4"></span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
