import { useState } from "react";
import Video from "../../../assets/Logo/icon2.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DarkMode from "./DarkMode";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isLanding = location.pathname === "/";

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 
        bg-white/80 dark:bg-[#0D0F16]/80 
        backdrop-blur-md border-b 
        border-gray-200 dark:border-[#2A2E3B] transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" onClick={closeMobile}>
            <div className="flex items-center gap-2">
              <img src={Video} className="w-10 h-10" />
              <span className="text-gray-900 dark:text-[#F1F5F9] font-semibold text-3xl tracking-tight">
                MeetVerse
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isLanding && (
              <>
                <a
                  href="#features"
                  className="text-gray-800 dark:text-[#A8B0C2] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  Features
                </a>

                <a
                  href="#how-it-works"
                  className="text-gray-800 dark:text-[#A8B0C2] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  How It Works
                </a>

                <a
                  href="#Overview"
                  className="text-gray-800 dark:text-[#A8B0C2] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  Overview
                </a>
                <a
                  href="#our-audience"
                  className="text-gray-800 dark:text-[#A8B0C2] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  Our Audience
                </a>
              </>
            )}

            {!isLanding && (
              <>
                <Link
                  to="/home"
                  className="text-gray-800 dark:text-[#A8B0C2] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  Dashboard
                </Link>
                <Link
                  to="/meetings"
                  className="text-gray-800 dark:text-[#A8B0C2] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  Meetings
                </Link>
                <Link
                  to="/groups"
                  className="text-gray-800 dark:text-[#A8B0C2] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  Groups
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-800 dark:text-[#A8B0C2] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  Profile
                </Link>
              </>
            )}

            <Link
              to="/login"
              className="text-blue-800 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-all font-semibold hover:-translate-y-0.5 cursor-pointer"
            >
              Login
            </Link>

            <Link
              to="/home"
              className="bg-blue-800 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-800 text-white rounded-lg shadow-sm transition-all px-4 py-2 font-semibold hover:-translate-y-0.5 cursor-pointer"
            >
              Get Started
            </Link>

            <DarkMode />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkMode />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="w-7 h-7 text-gray-900 dark:text-[#F1F5F9]" />
              ) : (
                <Menu className="w-7 h-7 text-gray-900 dark:text-[#F1F5F9]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="
            md:hidden absolute 
            top-16 left-0 right-0 
            bg-white dark:bg-[#0D0F16] 
            shadow-lg border-b border-gray-200 dark:border-[#2A2E3B] 
            flex flex-col gap-4 px-4 py-6 z-40 transition-all duration-300
          "
        >
          {isLanding ? (
            <>
              <a
                href="#features"
                onClick={closeMobile}
                className="text-gray-800 dark:text-[#F1F5F9] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                onClick={closeMobile}
                className="text-gray-800 dark:text-[#F1F5F9] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                How It Works
              </a>

              <a
                href="#Overview"
                onClick={closeMobile}
                className="text-gray-800 dark:text-[#F1F5F9] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Overview
              </a>
            </>
          ) : (
            <>
              <Link
                to="/home"
                onClick={closeMobile}
                className="text-gray-800 dark:text-[#F1F5F9] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Dashboard
              </Link>
              <Link
                to="/meetings"
                onClick={closeMobile}
                className="text-gray-800 dark:text-[#F1F5F9] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Meetings
              </Link>
              <Link
                to="/groups"
                onClick={closeMobile}
                className="text-gray-800 dark:text-[#F1F5F9] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Groups
              </Link>
              <Link
                to="/profile"
                onClick={closeMobile}
                className="text-gray-800 dark:text-[#F1F5F9] hover:text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Profile
              </Link>
            </>
          )}

          {/* Login & Get Started */}
          <div className="flex flex-col gap-3 mt-4 border-t border-gray-300 dark:border-[#2A2E3B] pt-4">
            <Link
              to="/login"
              onClick={closeMobile}
              className="px-5 py-2 font-bold dark:text-[#F1F5F9] text-blue-800 dark:hover:text-blue-400 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Login
            </Link>

            <Link
              to="/home"
              onClick={closeMobile}
              className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-800 transition-all hover:-translate-y-0.5 cursor-pointer font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
