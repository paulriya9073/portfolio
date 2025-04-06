import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const services=[
    {
      id:1,
      title:"Frontend Developer",
      description: "Building responsive and interactive user interface "
    },
    {
      id:2,
      title: "Backend Developer",
      description: "Developing robust server-side logic and database",
    },
  //   {
  //     id:3,
  //     title: "Web Design",
  //     description : "Createing visually appealing and user-friendly web designs"
  // },
];

const Services = () => {

    useEffect(() => {
      AOS.init({
          duration:1000,
        once: false, 
      });
    }, []);
  return (
    <>
    <div className=" text-white py-20 overflow-x-hidden overflow-y-hidden"  id="services">
            <div className="flex flex-col justify-center items-center mx-auto px-8 md:mx-16 lg:mx-24">
                <h2 data-aos="fade-down" className="text-6xl font-bold mb-12 font-serif italic">Services</h2>
                <div data-aos="zoom-out" className='pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8' >
                    {services.map((service)=>(
                      <div key={service.id} className='px-6 py-6 bg-fuchsia-900/20 shadow-inner shadow-fuchsia-800/30 rounded-lg transform transition-transform duration-300 hover:scale-105'>
                       
                          <h3 className='mt-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-purple-600 to-pink-500'>{service.title}</h3>

                          <p className='mt-2 text-white text-lg'>{service.description}</p>
                      
                      </div>
                    ))}

                    
                </div>
            </div>
    </div>
    </>
  )
}

export default Services