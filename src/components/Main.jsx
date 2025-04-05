import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { BsDownload, BsGithub } from 'react-icons/bs';
import { Typewriter } from 'react-simple-typewriter';


const Main = () => {
    return (
        <div className=' w-full text-white flex items-center px-10 py-20' id='main'>
            <div className='max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full'>

                {/* Left Content */}
                <div className='py-10 md:w-2/3'>
                    <h1 className='text-3xl md:text-5xl pt-6 font-bold'>
                        <div className='pb-1 md:pb-3 text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-l from-purple-600 to-pink-500'>Riya Paul</div>
                        <span className="mt-5 text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-yellow-600">
                            <Typewriter
                                words={['Full-Stack Developer','Frontend Developer','Backend Developer', 'Web Designer']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>
                    <p className='mt-2 md:mt-4 text-xl text-gray-300'>
                        I specialize in building modern and responsive web applications.
                    </p>
                    <div className='mt-8 flex flex-row justify-start items-center gap-7'>
                        <a href='#contact' className='w-40 flex justify-evenly items-center bg-gradient-to-l from-pink-600 to-purple-700 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full font-semibold'>
                            Say Hello! <FaTelegramPlane className='text-xl' />
                        </a>

                        <div className='w-32 bg-gradient-to-r from-pink-600 to-yellow-600 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full font-semibold flex items-center gap-2'>
                            <a href='https://drive.google.com/file/d/1miwfBWC9sfQV9oISRaoZ8ytugSsQgm6G/view?usp=sharing' aria-level='resume link' className='flex items-center'>
                                Resume
                            </a>
                            <a href="https://drive.usercontent.google.com/u/0/uc?id=1miwfBWC9sfQV9oISRaoZ8ytugSsQgm6G&export=download" className='hover:text-black text-xl' aria-label='resume download'>
                                <BsDownload />
                            </a>
                        </div>
                    </div>
                    <div className='my-6 flex justify-start gap-8 text-3xl'>
                        <a href="https://github.com/paulriya9073" target="_blank" aria-label='github link' className="text-fuchsia-400 hover:text-fuchsia-600 transition">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/riya-paul-145135300/" aria-label='linkedin link' target="_blank" className="text-fuchsia-400 hover:text-fuchsia-600 transition">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:paulriya9073@gmail.com" aria-label='mail link' className="text-fuchsia-400 hover:text-fuchsia-600 transition">
                            <FaEnvelope />
                        </a>
                    </div>

                </div>

                {/* Right Image */}
                <div className='py-10'>
                    <img src='/me.webp' alt='my image' className='w-60 h-60 md:w-72 md:h-72 rounded-full object-cover' />
                </div>

            </div>
        </div>
    );
};

export default Main;
