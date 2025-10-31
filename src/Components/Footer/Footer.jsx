const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#100c1f] text-gray-400 py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand/Motto Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-2">Al Amin Islam</h3>
            <p className="text-sm italic">
              Crafting digital experiences with clean code & modern design.
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="md:col-span-1">
            <h4 className="text-md font-semibold text-white mb-2">Get in Touch</h4>
            <ul className="space-y-2">
              <li className="flex justify-center md:justify-start items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:alaminislam4122.bd@email.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  alaminislam4122.bd@email.com
                </a>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.123l-2.007 1.255a1 1 0 00-.463 1.346l.462.462a1 1 0 001.346-.463l1.255-2.007a1 1 0 011.123-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
                <a
                  href="tel:+8801821858917"
                  className="hover:text-white transition-colors duration-300"
                >
                  +880 1821 858 917
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright/Socials Section */}
          <div className="md:col-span-1 flex flex-col items-center md:items-end">
            <h4 className="text-md font-semibold text-white mb-2">Connect with me</h4>
            {/* Add social media links here */}
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-white transition-colors duration-300">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors duration-300">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Horizontal Divider and Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-500">
            © MD Al Amin Islam {currentYear} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;