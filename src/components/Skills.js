import React from 'react';
// Import icons from libraries like react-icons
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-6xl animate-bounce " /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-6xl animate-bounce"/> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 text-6xl animate-bounce rounded-lg" /> },
  { name: 'React.js', icon: <FaReact className="text-blue-500 text-6xl animate-bounce" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-6xl animate-bounce" /> },
  { name: 'ExpressJS', icon: <SiExpress className="text-gray-800 text-6xl animate-bounce" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black text-6xl animate-bounce" /> },
  { name: 'Java', icon: <FaJava className="text-red-600 text-6xl animate-bounce" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-10  dark:bg-gray-900 px-10  scroll-mt-24">
      <div className="  mx-auto xl:text-start sm:text-center text-center xl:px-5 xl:py-5">
        <h2 className="text-4xl font-bold text-gray-700 mb-6 xl:ml-[5%] md:ml-[-10%] lg:ml-[2%] animate-bounce dark:text-gray-200 ">My Skills</h2>
        <p className="text-gray-500 mb-8 text-lg xl:ml-[5%] sm:ml-[5%] dark:text-gray-200 xl:text-start lg:text-center">
          Here are some technologies I am proficient in
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 xl:p-10 xl:mx-[2.2%] lg:mx-[6%] md:mx-[6%]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300  dark:bg-gray-700"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-medium text-gray-400">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;