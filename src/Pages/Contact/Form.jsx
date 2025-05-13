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
          className="w-full py-2 px-4 text-xs lg:text-sm border border-fuchsia-600/50 focus:outline focus:outline-fuchsia-600/50 rounded-lg bg-transparent text-white"
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
          className="w-full py-2 px-4 border border-fuchsia-600/30 focus:outline-2 focus:outline-fuchsia-600/50 rounded-lg bg-transparent text-white"
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}

        <textarea
          rows="4"
          placeholder="Your Message"
          {...register("message", { required: "Message is required" })}
          className="w-full py-2 px-4 border border-fuchsia-600/30 focus:outline-2 focus:outline-fuchsia-600/50 rounded-lg bg-transparent text-white"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs">{errors.message.message}</p>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`buttonClass group justify-end ${
              loading
                ? "opacity-50 cursor-not-allowed pointer-events-none border-fuchsia-500/20"
                : ""
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center flex-row gap-2">
                Sending{" "}
                <span className="loading loading-dots loading-md"></span>
              </div>
            ) : (
              "Send Message"
            )}
            <span className="buttonAnimationColor"></span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
