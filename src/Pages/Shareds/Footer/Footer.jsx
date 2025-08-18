import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-white">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 ">
          {/* Left side */}
          <aside className="bg-[#1F2937] px-6 sm:px-10 lg:px-20 py-12 flex flex-col items-center ">
            <h2 className="uppercase text-sm sm:text-base lg:text-3xl">
              Contact us
            </h2>
            <p>123 ABS Street,Uni 21,Bangladesh</p>
            <span>+88 01814082602</span>

            <span>Mon - Fri: 08:00 am - 22:00 pm</span>

            <span>Sat - Sun: 10:00 am - 23:00 pm</span>
          </aside>

          {/* Right side */}
          <nav className="bg-[#111827] px-6 sm:px-10 lg:px-20 py-12 flex flex-col items-center ">
            <h6 className="font-semibold text-lg mb-2">Follow Us</h6>
            <p className="mb-3 text-sm sm:text-base">Join us on social media</p>
            <div className="flex gap-4 text-xl">
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-sky-400 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </nav>
        </div>

        {/* Bottom Section */}
        <aside className="bg-[#151515] p-4 text-center">
          <p className="text-xs sm:text-sm text-white">
            Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="font-semibold ">MRS Restaurant</span>.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
