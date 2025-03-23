import { h2 } from 'motion/react-client';
import React, { useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaStackExchange, FaTimes } from 'react-icons/fa';

// Main Modal Component
const ProjectModal = ({ isOpen, onClose, project }) => {
    
  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-gradient-to-br from-[#0d060f] to-[#28032c] rounded-lg text-white"
        data-aos="zoom-in"
        onClick={(e) => e.stopPropagation()} // Prevent clicks within the modal from closing it
      >
        {/* Content Container */}
        <div className="p-6 flex flex-col md:flex-row justify-between gap-6">
          {/* Details column */}

          <div className="w-full md:w-1/2 flex flex-col">
          <div className='flex justify-between'>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-pink-600 to-fuchsia-600 mb-4">{project.name}</h1>
          <button onClick={onClose} className="md:hidden bg-fuchsia-900/40 text-white w-10 h-10 flex justify-center items-center  rounded-xl shadow-lg focus:outline-none"><FaTimes size={20} /></button>
          </div>
            
            <p className="text-gray-200 mb-2">{project.description ? project.description : "No Description is added"}</p>
            
            <div className="w-full flex flex-row justify-start gap-4 mt-4 pb-6">
              {project.live && (
                <a href={project.live} className="flex justify-center items-center gap-2 w-32 h-10 bg-fuchsia-950/30 rounded-md shadow-inner shadow-fuchsia-900 hover:bg-fuchsia-900/50 transition-colors">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} className="flex justify-center items-center gap-2 w-32 h-10 bg-fuchsia-950/30 rounded-md shadow-inner shadow-fuchsia-900 hover:bg-fuchsia-900/50 transition-colors">
                  <FaGithub /> Github
                </a>
              )}
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                <FaStackExchange/> <h2 className='text-xl font-medium'>Technologies Used</h2>
                </div>

                <div className="flex flex-wrap gap-2">
              {project.tech ? project.tech.split(', ').map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-fuchsia-800/50 rounded-full text-sm"
                >
                  {tech}
                </span>
              )): <h2>No Technologies are added </h2>}
            </div>
            </div>
          </div>

          {/* Image column */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-start gap-6">
            <div className="relative overflow-hidden rounded-lg w-full max-w-md">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full object-cover"
              />
            </div>

             {/* Features */}
            <div className="w-full">
              <h3 className="text-2xl font-bold text-pink-400 mb-2">Features</h3>
              <ul className="list-disc pl-6 space-y-1">
                {project.features ? project.features.map((feature, index) => (
                  <li key={index} className="text-white/90">{feature}</li>
                )): <h2>No Features are added</h2>}
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ProjectModal;