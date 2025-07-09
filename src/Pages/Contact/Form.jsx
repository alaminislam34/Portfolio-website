import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/send-email`,
        data
      );

      if (res.status === 200) {
        toast.success("Email sent successfully!", {
          style: {
            background: "linear-gradient(to top right, #48284d, #8d13a0)",
            color: "#ffffff",
          },
        });
        reset();
      } else {
        toast.error("Failed to send email.", {
          style: {
            background: "linear-gradient(to top right, #48284d, #8d13a0)",
            color: "#ffffff",
          },
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong.", {
        style: {
          background: "linear-gradient(to top right, #48284d, #8d13a0)",
          color: "#ffffff",
        },
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          className="w-full py-2 px-4 text-xs lg:text-sm border border-purple-600/50 focus:outline focus:outline-purple-600/50 rounded-lg bg-transparent text-white"
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}

        <input
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email address",
            },
          })}
          className="w-full py-2 px-4 border border-purple-600/30 focus:outline-2 focus:outline-purple-600/50 rounded-lg bg-transparent text-white"
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}

        <textarea
          rows="4"
          placeholder="Your Message"
          {...register("message", { required: "Message is required" })}
          className="w-full py-2 px-4 border border-purple-600/30 focus:outline-2 focus:outline-purple-600/50 rounded-lg bg-transparent text-white"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs">{errors.message.message}</p>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`bg-white/10 border border-white/20 py-1.5 px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10 ${
              loading
                ? "opacity-50 cursor-not-allowed pointer-events-none border-purple-500/20"
                : ""
            }`}
          >
            <div className="absolute top-0 -right-48 w-1/4 h-full bg-white/20 blur-sm group-hover:right-64 duration-700"></div>
            <button className="py-2.5 px-8 active:scale-95 rounded-lg  bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden">
              <span className="relative z-10">
                {loading ? (
                  <div className="flex items-center justify-center flex-row gap-2">
                    Sending
                    <span className="loading loading-dots loading-md"></span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </span>
              <span className="absolute top-0 w-1/4 h-full -left-44 bg-white/20 blur-sm group-hover:left-60 duration-1000 transition-all ease-out z-0"></span>
            </button>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
