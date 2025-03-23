import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import p1 from "../../public/p1.png";
import p2 from "../../public/p2.png";
import p3 from "../../public/p3.png";
import p4 from "../../public/p4.png";
import p5 from "../../public/p5.png";
import { FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import ProjectModal from './ProjectModal'; // Import the modal component
import { FaAnglesRight, FaLeftRight } from 'react-icons/fa6';

// Enhanced projects data with features
const projects = [
 
  {
    id: 2,
    name: "Ecommerce Solution",
    image: p2,
    description: "A comprehensive solution for managing your online store with a interactive Admin dashboard with sales analytics,Product management system,Order tracking and management,User authentication with roles,Payment gateway integration,Visual data representation using Graphs and Pie-Charts,Build in Tax Calculator",
    live: "",
    github: "",
    tech: "MongoDB, Express, ReactJS, NodeJS, TailwindCSS",
    features: [
      "Full authentication and authorization are implemented with the help of JWT to ensure secure and efficient user sessions",
      "React Reusable Component for smooth, seamless and responsive experience",
      "Using Cloudinary, Latency reduction by 30-60%, load time improve upto 25%"
      
      
    ]
  },
  {
    id: 3,
    name: "Tithi Tatwa Decoration",
    image: p3,
    description: "Tithi Tatwa Decoration, your premier destination for exquisite wedding tatwa decor that captures the essence of traditional Bengali culture With a passion for creating unforgettable experiences.",
    live: "",
    github: "",
    tech: "ReactJS, TailwindCSS",
    features: [
      "Gallery of previous decoration projects",
      "Booking system for appointments",
      "Customization options for clients",
      "Event type filtering",
      "Contact form with instant quote"
    ]
  },
  {
    id: 1,
    name: "Mind Memos",
    image: p1,
    description: "A creative platform to organize your thoughts and ideas. Users can register, write notes, edit notes, can perform their day-to-day work into a schedule",
    live: "https://mindmemos.onrender.com/",
    github: "https://github.com/paulriya9073/mindmemos",
    tech: "MongoDB, Express, ReactJS, NodeJS, TailwindCSS",
    features: [
      "JWT is used for Secure User authentication and registration",
      "Create, edit, and delete notes",
      "React Reusable Component for smooth, seamless and responsive experience.",
      "MongoDB for flexible schema."
    ]
  },
  {
    id: 4,
    name: "JUFY",
    image: p4,
    description: "A beautiful and interactive frontend",
    live: "",
    github: "",
    tech: "HTML, CSS, JavaScript",
    features: [
      "Responsive design across all devices",
      "Interactive UI elements",
      "Modern design patterns",
      "Fast loading times"
    ]
  },
  {
    id: 5,
    name: "Short Story",
    image: p5,
    description: "It is a Landing Page containing a Short Story with Parallax Scroling",
    live: "",
    github: "",
    tech: "",
    features: [
      "Smooth parallax scrolling effects",
      "Animated transitions between story sections",
      "Audio integration for immersive experience",
      "Responsive design for all devices"
    ]
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (
    <div className="text-white py-20 overflow-y-hidden" id="projects">
      <div className="flex flex-col justify-center items-center mx-auto px-8 md:mx-16 lg:mx-24">
        <h2 data-aos="fade-down" className="text-6xl text-center font-bold mb-12 font-serif italic">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-auto flex flex-col gap-3 px-6 py-6 bg-fuchsia-900/20 shadow-inner shadow-fuchsia-800/30 rounded-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div data-aos="flip-up" className="relative group">
                <img
                  src={project.image}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                  alt={project.name}
                />
    
                {/* Glassmorphism Description */}
                <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-tr from-white/20 to-black/30 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <p className="text-center px-4 font-bold">{project.description.substring(0, 100)}...</p>
                </div>
              </div>
    
              <h3 data-aos="fade-up-right" className="text-3xl font-bold text-pink-400 italic">{project.name}</h3>
            
              
              <div data-aos="fade-up-left" className="flex flex-row justify-between text-xl mt-4">

                <div>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="h-10 flex items-center justify-center gap-1 transition-colors duration-200 font-semibold"
                    >
                      Live <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                  </div>
                  
                 <div className='bg-fuchsia-950/80 w-28 flex justify-center rounded-md'>  
                 <button
                  onClick={() => openModal(project)}
                  className="h-10 flex items-center justify-center gap-2 transition-colors duration-200 font-semibold"
                >
                  Details <FaAnglesRight/>
                </button>

                 </div>
                </div>
              </div>
            
          ))}
        </div>
      </div>
      
      {/* Modal Component */}
      <ProjectModal 
        isOpen={modalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;