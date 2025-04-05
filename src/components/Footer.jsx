import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-white py-8">
      <div className="w-full max-w-full px-4 md:px-8 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between md:space-x-12 items-center mb-4">
          <div className="mb-4 md:mb-0">
            <h4 className="text-2xl font-bold mb-2">Riya</h4>
            <p className="text-gray-400">
              Full-Stack Developer based in the INDIA, specializing in web and
              software development.
            </p>
          </div>
          <div className="w-60 h-16 flex justify-center items-center space-x-6 my-4 md:my-0">
            {/* <a href='https://www.facebook.com/profile.php?id=100078158615985' className="text-gray-400 hover:text-white text-2xl">
              <FaFacebook />
            </a> */}
            <a href="https://wa.me/+919073817838" aria-label="whatsapp link" className="text-gray-400 hover:text-white text-2xl">
              <FaWhatsappSquare />
            </a>
            <a href="https://www.linkedin.com/in/riya-paul-145135300/" aria-label="linkedin link" className="text-gray-400 hover:text-white text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/paulriya9073" aria-label="github link" className="text-gray-400 hover:text-white text-2xl">
              <FaGithub />
            </a>
            {/* <a href="https://www.instagram.com/r.i.y.a_p.a.u.l/" className="text-gray-400 hover:text-white text-2xl">
              <FaInstagram />
            </a> */}
          </div>
         
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy;{new Date().getFullYear()}Riya All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;