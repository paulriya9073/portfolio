import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between md:space-x-12 items-center mb-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Riya</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in the INDIA, specializing in web and
              software development.
            </p>
          </div>
          <div className="w-60 h-16 flex justify-center items-center space-x-6 my-4 md:my-0">
            {/* <a href='https://www.facebook.com/profile.php?id=100078158615985' className="text-gray-400 hover:text-white text-2xl">
              <FaFacebook />
            </a> */}
            <a href="https://wa.me/+919073817838" className="text-gray-400 hover:text-white text-2xl">
              <FaWhatsappSquare />
            </a>
            <a href="https://www.linkedin.com/in/riya-paul-145135300/" className="text-gray-400 hover:text-white text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/paulriya9073" className="text-gray-400 hover:text-white text-2xl">
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