import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { FaAward, FaBriefcase, FaSmile } from "react-icons/fa";

const About = () => {

  useEffect(() => {
    AOS.init({
        duration:1000,
      once: false, 
    });
  }, []);

  return (
    <div className="h-full w-full text-white py-5 overflow-x-hidden overflow-y-hidden" id="about">
      <div className="flex flex-col justify-center items-center mx-auto px-8 md:mx-16 lg:mx-24">
        <h2 data-aos="fade-down" className="text-6xl font-bold mb-12 font-serif italic">About Me</h2>

        <div className='md:grid md:grid-cols-12 justify-center items-center gap-5'>
          {/* img */}
          <div data-aos="flip-right"className='md:col-span-6 flex justify-center items-center py-10'>
            <img src='/me1.webp' alt='my image 1' className='w-60 h-60 md:w-72 md:h-72 rounded-md object-cover' />
          </div>

          {/* content */}
          <div data-aos="fade-left" className="md:col-span-6 text-lg text-justify mb-8">
            <p className='px-4'>
            I am a passionate full-stack developer dedicated to creating modern, responsive web applications. With a solid foundation in both frontend and backend technologies, I specialize in delivering seamless, efficient, and user-focused digital experiences. My expertise lies in designing and implementing robust solutions that bridge functionality with intuitive design, ensuring a smooth interaction for users across all platforms. Constantly exploring new tools and technologies, I aim to stay ahead in the fast-evolving tech landscape and bring innovative ideas to life.
            </p>
          </div>
        </div>

      </div>
      <div className="h-auto flex flex-col md:flex-row justify-evenly gap-4 items-center mt-14">
      {/* Experience Card */}
      <div data-aos="zoom-in" className="flex flex-col gap-2 justify-center items-center w-96 h-48 rounded-md shadow-inner shadow-fuchsia-800/30 bg-fuchsia-900/20"
      >
        <FaAward className="text-4xl text-white" />
        <h2 data-aos="fade-down" className="text-lg font-semibold text-white">Experience</h2>
        <p data-aos="fade-up" className="text-sm text-gray-300">3+ Working Years</p>
      </div>

      {/* Completed Projects Card */}
      <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col gap-2 justify-center items-center w-96 h-48 bg-fuchsia-900/20 shadow-inner shadow-fuchsia-800/30">
        <FaBriefcase className="text-4xl text-white" />
        <h2 data-aos="fade-down" data-aos-delay="300" className="text-lg font-semibold text-white">Completed</h2>
        <p data-aos="fade-up" data-aos-delay="400" className="text-sm text-gray-300">4+ Projects</p>
      </div>

      {/* Happy Clients Card */}
      <div data-aos="zoom-in" data-aos-delay="400" className="flex flex-col gap-2 justify-center items-center w-96 h-48 rounded-md bg-fuchsia-900/20 shadow-inner shadow-fuchsia-800/30">
        <FaSmile className="text-4xl text-white" />
        <h2 data-aos="fade-down" data-aos-delay="500" className="text-lg font-semibold text-white">Happy Clients</h2>
        <p data-aos="fade-up" data-aos-delay="600" className="text-sm text-gray-300">3+ Clients</p>
      </div>
    </div>
    </div>
  );
};

export default About;
