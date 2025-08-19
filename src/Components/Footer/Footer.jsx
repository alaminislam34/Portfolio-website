const Footer = () => {
  return (
    <footer
      data-aos="fade-in-up"
      data-aos-offset="0"
      data-aos-anchor-placement="top-bottom"
      className="bg-[#120727]/30 border-t border-white/10 pt-10 pb-6 text-white/70 text-center"
    >
      {/* Contact Info */}
      <p className="text-sm md:text-base">
        📞 +880 1821 858 917 | ✉️ alaminislam43.bd@email.com
      </p>

      {/* Quote / Motto */}
      <p className="mt-6 italic text-xs md:text-sm">
        “Crafting digital experiences with clean code & modern design.”
      </p>

      {/* Tech Stack Info */}
      <p className="mt-3 text-xs md:text-sm">
        🚀 Built with <span className="text-white">React</span>,{" "}
        <span className="text-white">TailwindCSS</span> & ❤️
      </p>

      {/* Copyright */}
      <p className="mt-4 text-xs md:text-sm">
        © MD Al Amin Islam 2025 - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
