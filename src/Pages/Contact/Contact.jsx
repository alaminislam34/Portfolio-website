import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import Title from "../../Components/Shared/Title";
import Form from "./Form";

const Contact = () => {
  return (
    <div>
      <Title title={"Contact Me"} />
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className=" p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-purple-400/10 rounded-xl shadow-2xl"
      >
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h2 className="text-xl md:text-2xl font-bold text-purple-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Feel free to reach out for any inquiries or feedback!
          </p>

          <div className="space-y-4 lg:space-y-6">
            {/* Email */}
            <div className="flex items-center gap-3 p-3 rounded-lg shadow-sm">
              <FaEnvelope className="text-purple-400 text-xl" />
              <a
                href="mailto:mi3548514@email.com"
                className="text-xs lg:text-sm"
              >
                alaminislam43.bd@email.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 p-3 rounded-lg shadow-sm">
              <FaPhone className="text-purple-400 text-xl" />
              <a href="tel:+123456789" className="text-xs lg:text-sm">
                +880 182 1858 917
              </a>
            </div>

            {/* WhatsApp (Optional) */}
            <div className="flex items-center gap-3 p-3 rounded-lg shadow-sm">
              <FaWhatsapp className="text-purple-400 text-2xl" />
              <a
                href="https://wa.me/01821858917"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs lg:text-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="rounded-xl shadow-md"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-purple-400 mb-4">
            Leave a Message
          </h3>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
