import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

export const WelcomeScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className='w-full h-screen flex justify-center items-center text-white bg-gradient-to-br from-[#0d060f] to-[#28032c]'>
      <div  className='flex h-96 flex-col gap-6 justify-center items-center'>
        <h1 data-aos="fade-down" className='text-2xl md:text-5xl'>Hi! Welcome to my portfolio website </h1>
        <div data-aos="zoom-out" className='text-xl md:text-3xl flex justify-center items-center gap-2'>
          <h2>Developer, </h2>
          <h2>Craft Enthusiast </h2></div>

        <div data-aos="flip-up" className='flex justify-start gap-8 text-3xl'>
          <a href="https://github.com/paulriya9073" className="group">
            <img
              className='rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(192,132,252,0.8)]'
              src="public/github.svg"
              alt="GitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/riya-paul-145135300/" className="group">
            <img
              className='rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(192,132,252,0.8)]'
              src="public/linkedin.svg"
              alt="LinkedIn"
            />
          </a>
          <a href="mailto:paulriya9073@gmail.com" className="group">
            <img
              className='rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(192,132,252,0.8)]'
              src="public/mail.png"
              alt="Email"
            />
          </a>
        </div>
      </div>

    </div>
  )
}
