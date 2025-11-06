import SparkleBadge from "../AboutMe/SparkleBadge";

// This is a placeholder for your Form component
const Form = () => {
  return (
    <form className="space-y-6">
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="relative">
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Your Message"
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
          Send Message
        </span>
        <svg
          className="ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="absolute inset-0 z-0 bg-white/10 transition-transform duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
      </button>
    </form>
  );
};

const ContactCard = ({ icon, text, href, isWhatsApp }) => (
  <a
    href={href}
    target={isWhatsApp ? "_blank" : "_self"}
    rel={isWhatsApp ? "noopener noreferrer" : ""}
    className="group relative flex w-full items-center rounded-2xl border border-white/10 bg-white/5 py-4 px-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
  >
    <div className="relative z-10 mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110">
      {icon}
    </div>
    <span className="relative z-10 font-medium text-gray-200">{text}</span>
    {/* Subtle gradient overlay on hover */}
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-800/10 to-indigo-800/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
  </a>
);

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-[#2a0c4f] via-transparent to-transparent opacity-50"></div>

      <div className="relative z-10 my-6 md:my-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            <SparkleBadge text={"Contact"} /> Me
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Feel free to reach out for any inquiries or feedback.
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md md:p-12 lg:p-16">
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-purple-500/10" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Column: Contact Info */}
            <div>
              <h3 className="mb-6 text-3xl font-bold tracking-tight text-white">
                Get in Touch
              </h3>
              <p className="mb-8 text-gray-400">
                I'm currently open to new opportunities. Whether you have a
                question or just want to say hi, my inbox is always open.
              </p>

              <div className="space-y-4 text-sm md:text-base">
                <ContactCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  }
                  text="alaminislam43.bd@email.com"
                  href="mailto:alaminislam43.bd@email.com"
                />
                <ContactCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.058 11.058 0 005.342 5.342l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  }
                  text="+880 182 1858 917"
                  href="tel:+8801821858917"
                />
                <ContactCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.04 2.87c-5.46 0-9.91 4.45-9.91 9.91 0 1.63.4 3.2.98 4.67l-1.05 3.86 3.93-1.03c1.43.8 3.01 1.25 4.65 1.25a9.92 9.92 0 009.92-9.92 9.92 9.92 0 00-9.92-9.92zm3.32 13.92c-.17.41-.93.63-1.63.92a7.35 7.35 0 01-2.03.1c-.8-.01-1.66-.25-2.58-.93-.93-.68-1.5-1.74-1.67-2.92-.17-1.19-.07-2.33.28-3.41.35-1.07.97-1.92 1.83-2.54.85-.62 1.82-.93 2.85-.92.74.01 1.48.16 2.19.46.72.3 1.34.73 1.87 1.26s.95 1.13 1.26 1.85.45 1.5.46 2.24c.01 1.03-.29 2-.92 2.85-.62.86-1.47 1.48-2.54 1.83-1.08.35-2.22.45-3.41.28-1.19-.17-2.25-.74-2.93-1.67-.68-.93-.92-2.03-.93-3.05-.01-1.03.24-2.06.67-2.88l-.29-1.22c-.41 1.07-.63 2.19-.63 3.32 0 2.21.99 4.22 2.56 5.62 1.57 1.4 3.73 2.18 5.92 2.19 1.57-.01 3.08-.43 4.42-1.23l2.09.55-1.45-5.32c.98-1.46 1.53-3.13 1.53-4.96.01-5.46-4.44-9.91-9.9-9.91z" />
                    </svg>
                  }
                  text="Chat on WhatsApp"
                  href="https://wa.me/8801821858917"
                  isWhatsApp={true}
                />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <h3 className="mb-6 text-3xl font-bold tracking-tight text-white">
                Leave a Message
              </h3>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
