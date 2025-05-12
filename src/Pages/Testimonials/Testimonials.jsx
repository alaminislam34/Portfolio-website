import { X } from "lucide-react";
import Title from "../../Components/Shared/Title";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Slider from "react-slick";
import user from "../../assets/logo/user.png";

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
    if (!name || !overview) return;

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/postReview`,
        formData
      );

      if (res.data?.insertedId) {
        toast.success("Thanks for your feedback!", {
          style: {
            background: "linear-gradient(to top right, #48284d, #8d13a0)",
            color: "#ffffff",
          },
        });
        fetchFeedbacks();
        setFormData({ name: "", overview: "" });
        setOpen(false);
      }
    } catch (error) {
      console.error("Failed to submit feedback:", error);
      toast.error("Something went wrong.");
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
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 520,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="px-4 md:px-10">
      <Title
        title="Testimonials"
        des="I'd love to hear your thoughts on my portfolio. Please feel free to share your honest feedback."
      />

      {/* Feedback Modal */}
      {open && (
        <div className="fixed bg-black/50 w-screen h-screen top-0 left-0 flex items-center justify-center z-50 p-4">
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-6 rounded-xl space-y-4 md:space-y-6 mb-12 border bg-fuchsia-700/10 border-fuchsia-500/10 backdrop-blur-xl relative shadow-2xl shadow-fuchsia-500/10"
          >
            <button
              onClick={() => setOpen(false)}
              type="button"
              className="btn btn-sm btn-circle bg-fuchsia-950 absolute right-2 top-2"
            >
              <X />
            </button>
            <h2 className="text-3xl font-bold text-fuchsia-400 text-center mb-4">
              Give Feedback
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-fuchsia-600/20 rounded-md outline-none focus:ring-2 focus:ring-fuchsia-400"
              required
            />
            <textarea
              name="overview"
              rows="4"
              placeholder="Your Overview..."
              value={formData.overview}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-fuchsia-600/20 rounded-md outline-none focus:ring-2 focus:ring-fuchsia-400"
              required
            />
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="border border-[#66426b] px-3 lg:px-4 py-2 rounded-lg relative z-20 group hover:shadow-lg shadow-[#3b1441]/40 bg-gradient-to-tr from-[#1c0922] to-[#7e057f] overflow-hidden flex items-center gap-2 text-[#e2c9e8] group-hover:text-white transition duration-300 cursor-pointer"
              >
                Submit Feedback
                <span className="w-40 h-20 left-1/2 -translate-x-1/2 bg-gradient-to-bl from-[#1d0c1f] via-[#550a5f] to-[#920597] block absolute -bottom-24 group-hover:-bottom-4 duration-700 shadow-lg shadow-[#501858]/30 z-[-1] border border-[#39133f] rotate-6 blur-sm"></span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Feedback Slider */}
      <div className="my-12">
        {feedbacks.length > 0 ? (
          <Slider {...sliderSettings}>
            {feedbacks.map((item, index) => (
              <div key={index} className="p-4">
                <div className="bg-[#1a0d1f] border space-y-2 border-fuchsia-900/20 rounded-2xl shadow-lg text-center p-6 mx-2">
                  <img
                    src={user}
                    className="w-14 h-14 rounded-full object-cover border-2 border-fuchsia-400 mx-auto mb-3 p-1"
                  />
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.overview?.slice(0, 150)}
                  </p>
                  <p className="text-gray-400 text-xs pt-2">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center text-gray-400">No Feedback Yet</div>
        )}
      </div>

      {/* Give Feedback Button */}
      <div className="flex items-center justify-center mt-4 lg:mt-6">
        <button
          onClick={() => setOpen(true)}
          className="border border-[#66426b] px-3 lg:px-4 py-2 rounded-lg relative z-20 group hover:shadow-lg shadow-[#3b1441]/40 bg-gradient-to-tr from-[#1c0922] to-[#7e057f] overflow-hidden flex items-center gap-2 text-[#e2c9e8] group-hover:text-white transition duration-300 cursor-pointer"
        >
          Give Feedback
          <span className="w-40 h-20 left-1/2 -translate-x-1/2 bg-gradient-to-bl from-[#1d0c1f] via-[#550a5f] to-[#920597] block absolute -bottom-24 group-hover:-bottom-4 duration-700 shadow-lg shadow-[#501858]/30 z-[-1] border border-[#39133f] rotate-6 blur-sm"></span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
