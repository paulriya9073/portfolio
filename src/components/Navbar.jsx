import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaBars, FaTimes, FaHome, FaUser, FaTools, FaBriefcase, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "services", "projects", "contact"];
      const offsets = sections.map((section) => {
        const element = document.getElementById(section);
        return element ? element.offsetTop : 0;
      });

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < sections.length; i++) {
        if (
          scrollPosition >= offsets[i] &&
          (i === sections.length - 1 || scrollPosition < offsets[i + 1])
        ) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar for Desktop */}
      <nav className="hidden md:flex text-white px-8 md:px-10 lg:px-10 h-24">
        <div className="py-2 flex justify-between items-center w-full h-24">
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-pink-500 font-serif italic">
            Riya
          </div>
          <div className="flex gap-2 justify-center items-center text-xl font-semibold">
          <AnchorLink href="#main" className="w-24 h-8 text-center text-white bg-fuchsia-900/20 hover:bg-fuchsia-900/40 rounded-full">
              Home
            </AnchorLink>
            <AnchorLink href="#about" className="w-24 h-8 text-center text-white bg-fuchsia-900/20 hover:bg-fuchsia-900/40 rounded-full">
              About
            </AnchorLink>
            <AnchorLink href="#skills" className="w-24 h-8 text-center text-white bg-fuchsia-900/20 hover:bg-fuchsia-900/40 rounded-full">
              Skills
            </AnchorLink>
            <AnchorLink href="#services" className="w-24 h-8 text-center text-white bg-fuchsia-900/20 hover:bg-fuchsia-900/40 rounded-full">
              Services
            </AnchorLink>
            <AnchorLink href="#projects" className="w-24 h-8 text-center text-white bg-fuchsia-900/20 hover:bg-fuchsia-900/40 rounded-full">
              Projects
            </AnchorLink>
            <AnchorLink href="#contact" className="w-24 h-8 text-center text-white bg-fuchsia-900/20 hover:bg-fuchsia-900/40 rounded-full">
              Contact
            </AnchorLink>
          </div>
        </div>
      </nav>

      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMenu}
          className="bg-fuchsia-900/40 text-white p-4 rounded-xl shadow-lg focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Bottom Navigation for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden h-60 fixed bottom-0 left-0 w-full bg-[#280a2b] text-white grid grid-cols-3 items-center py-4 shadow-2xl z-40">
          <a
            href="#main"
            className={`flex flex-col items-center text-sm ${
              activeSection === "home" ? "text-purple-400" : ""
            }`}
          >
            <FaHome className="text-xl" />
            <span>Home</span>
          </a>
          <AnchorLink
            href="#about"
            className={`flex flex-col items-center text-sm ${
              activeSection === "about" ? "text-purple-400" : ""
            }`}
          >
            <FaUser className="text-xl" />
            <span>About</span>
          </AnchorLink>
          <AnchorLink
            href="#skills"
            className={`flex flex-col items-center text-sm ${
              activeSection === "skills" ? "text-purple-400" : ""
            }`}
          >
            <FaFileAlt className="text-xl" />
            <span>Skills</span>
          </AnchorLink>
          <AnchorLink
            href="#services"
            className={`flex flex-col items-center text-sm ${
              activeSection === "services" ? "text-purple-400" : ""
            }`}
          >
            <FaTools className="text-xl" />
            <span>Services</span>
          </AnchorLink>
          <AnchorLink
            href="#projects"
            className={`flex flex-col items-center text-sm ${
              activeSection === "projects" ? "text-purple-400" : ""
            }`}
          >
            <FaBriefcase className="text-xl" />
            <span>Projects</span>
          </AnchorLink>
          <AnchorLink
            href="#contact"
            className={`flex flex-col items-center text-sm ${
              activeSection === "contact" ? "text-purple-400" : ""
            }`}
          >
            <FaEnvelope className="text-xl" />
            <span>Contact</span>
          </AnchorLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
