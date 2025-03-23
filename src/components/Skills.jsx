import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

// Sample skills with their respective SVG file names
const skills = [
  { name: 'NextJs', svg: 'next.svg' },
  { name: 'TypeScript', svg: 'typescript.svg' },
  { name: 'MongoDB', svg: 'mongodb.svg' },
  { name: 'JavaScript', svg: 'javascript.svg' },
  { name: 'React', svg: 'reactjs.svg' },
  { name: 'Tailwind CSS', svg: 'tailwind.svg' },
  { name: 'Node.js', svg: 'nodejs.svg' },
  { name: 'Express.js', svg: 'ex.svg' },
  { name: 'PostgreSQL', svg: 'possql.svg' },
  { name: 'HTML', svg: 'html.svg' },
  { name: 'CSS', svg: 'css.svg' },
  
];

const Skills = () => {

useEffect(() => {
    AOS.init({
        duration:1000,
      once: false, 
    });
  }, []);

  const firstHalfSkills = skills.slice(0, Math.ceil(skills.length / 2));
  const secondHalfSkills = skills.slice(Math.ceil(skills.length / 2));

  return (
    <div className=" overflow-x-hidden overflow-y-hidden text-white py-20" id="skills">
      <h2 data-aos="fade-down" className="text-6xl text-center font-bold mb-12 font-serif italic">My Skills</h2>

      <div className="flex flex-col md:flex-row justify-center gap-6 pt-8 px-4">
        {/* 1st container */}
        <div data-aos="fade-up-right" className="flex justify-center items-center">
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-6">
            {firstHalfSkills.map((skill, index) => (
              <div
                key={index}
                className=" bg-fuchsia-900/20 shadow-inner shadow-fuchsia-800/30 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 h-36 w-32 md:h-40 md:w-36 flex flex-col justify-evenly items-center"
              >
                <img 
                  src={`/skills/${skill.svg}`} 
                  alt={skill.name} 
                  className="mb-4 w-16 h-16 mx-auto" 
                />
                <h4 className="text-xl font-bold text-center">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* 2nd container */}
        <div data-aos="fade-up-left" className="flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
            {secondHalfSkills.map((skill, index) => (
              <div
                key={index}
                className=" p-6 rounded-lg  bg-fuchsia-900/20 shadow-inner shadow-fuchsia-800/30 transform transition-transform duration-300 hover:scale-105 h-36 w-32 md:h-40 md:w-36 flex flex-col justify-evenly items-center"
              >
                <img 
                  src={`/skills/${skill.svg}`} 
                  alt={skill.name} 
                  className="mb-4 w-16 h-16 mx-auto" 
                />
                <h4 className="text-xl font-bold text-center">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
