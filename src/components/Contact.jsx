import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkedAlt, FaPhone, FaTelegram, FaTelegramPlane } from 'react-icons/fa'
import toast from 'react-hot-toast';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });

     useEffect(() => {
          AOS.init({
              duration:1000,
            once: false, 
          });
        }, []);

    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        

        fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL,{
            method:"POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body:(`name=${formData.name}&email=${formData.email}&message=${formData.message}`)
          }).then(res=>res.text()).then(data=>{
            toast.success("Message received! We'll get back to you soon.")
      
          setIsSubmitting(false);
      
          }).catch(()=>toast.error("Please try again later."))
    
        // formData.append("access_key", "0414f239-d0ee-4785-8f2c-21de3bd1d8c2");
    
        // const object = Object.fromEntries(formData);
        // const json = JSON.stringify(object);
    
        // const res = await fetch("https://api.web3forms.com/submit", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json"
        //   },
        //   body: json
        // }).then((res) => res.json());
    
        // if (res.success) {
        //     setMessage("Your message has been sent successfully!");
        //     setIsSuccess(true)
        //     formRef.current.reset(); 
        // } else {
        //     setMessage("There was an issue sending your message. Please try again.");
        //     setIsSuccess(false)
        // }
      };

    return (
        <>
            <div className=" text-white overflow-x-hidden overflow-y-hidden" id="contact">
                <div className=" items-center mx-auto px-8 md:mx-16 lg:mx-24">
                    <h2 data-aos="fade-down" className="text-6xl text-center font-bold mb-12 font-serif italic">Contact Me</h2>
                    <div className="flex flex-col md:flex-row items-center md:space-x-12 pt-8">
                        <div data-aos="fade-up-right" className='flex-1'>
                            <h3 className='text-4xl mb-3 text-transparent bg-clip-text bg-gradient-to-t from-pink-600 to-fuchsia-600 font-bold'>Let's Talk</h3>
                            <p className='text-[1.1rem] text-justify'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>

                            <div className='mb-4 mt-8 cursor-pointer'>
                                <FaEnvelope className='inline-block text-fuchsia-500 mr-2'></FaEnvelope>
                                <a href="mailto:paulriya9073@gmail.com" className=''>
                                    paulriya9073@gmail.com
                                </a>
                            </div>
                            <div className='mb-4 mt-8 cursor-pointer'>
                                <FaLinkedin className='inline-block text-fuchsia-500 mr-2'></FaLinkedin>
                                <a href="https://www.linkedin.com/in/riya-paul-145135300/" className=''>
                                    Riya Paul
                                </a>
                            </div>
                            <div className='mb-4 mt-8 cursor-pointer'>
                                <FaGithub className='inline-block text-fuchsia-500 mr-2'></FaGithub>
                                <a href="https://github.com/paulriya9073" className=''>
                                    paulriya9073
                                </a>
                            </div>
                            <div className='mb-4 mt-8'>
                                <FaPhone className='inline-block text-fuchsia-500 mr-2'></FaPhone>
                                <a href="https://wa.me/+919073817838">+91 9073817838</a>
                            </div>
                        </div>

                        <div data-aos="fade-up-left" className='flex-1 w-full '>
                            <h1 className='text-center text-xl p-6'>Send me your message!</h1>
                            <div className='bg-fuchsia-900/20 p-4 rounded-md'>
                            <form ref={formRef}
                                className='space-y-4'
                                onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="name" className='block mb-3 text-xl '>Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className='w-full p-2 rounded bg-fuchsia-900/20 border-2 border-fuchsia-800/20 focus:outline-none'
                                        placeholder='Enter your name'
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="email" className='block mb-3 text-xl'>Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className='w-full p-2 rounded block mb-2  bg-fuchsia-900/20 border-2 border-fuchsia-800/20 focus:outline-none'
                                        placeholder='Enter your email'
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="message" className='block mb-3 text-xl'> Your Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className='w-full p-2 rounded block mb-2  bg-fuchsia-900/20 border-2 border-fuchsia-800/20 focus:outline-none'
                                        rows="5"
                                        placeholder='Enter your message'
                                        required></textarea>
                                </div>
                                <button
                                    disabled={isSubmitting}
                                    className='w-52 h-10 flex justify-center items-center gap-2 bg-gradient-to-tr from-pink-600 to-purple-700 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full font-semibold'>
                                    
                                    {isSubmitting ? "Sending.....": "Send Message "}
                                    <FaTelegramPlane size={20}/>
                                </button>
                                
                            </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact