import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="text-gray-300 px-6 md:px-12 lg:px-20 pt-20 pb-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 pb-10">
          {/* Logo and Description */}
          <div>
            <img src={assets.logo} alt="QuickShow" className="w-36 mb-4" />

            <p className="text-sm text-gray-400 leading-6 max-w-xs mb-6">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>

            <div className="flex gap-3">
              <img
                src={assets.googlePlay}
                alt="Get it on Google Play"
                className="h-10 w-auto cursor-pointer hover:opacity-80 transition"
              />

              <img
                src={assets.appStore}
                alt="Download on App Store"
                className="h-10 w-auto cursor-pointer hover:opacity-80 transition"
              />
            </div>
          </div>

          {/* Company */}
          <div className="md:justify-self-center">
            <h3 className="text-white font-semibold mb-6">Company</h3>

            <div className="flex flex-col gap-4 text-sm">
              <a href="/" className="hover:text-primary transition">
                Home
              </a>
              <a href="/about" className="hover:text-primary transition">
                About us
              </a>
              <a href="/contact" className="hover:text-primary transition">
                Contact us
              </a>
              <a href="/privacy" className="hover:text-primary transition">
                Privacy policy
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="md:justify-self-center">
            <h3 className="text-white font-semibold mb-6">Get in touch</h3>

            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <p>+1-212-456-7890</p>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-5 text-center">
          <p className="text-sm text-gray-500">
            Copyright 2025 © GreatStack. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
