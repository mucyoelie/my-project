import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = () => {
    const projects = [
        {
            title: 'My Portfolio',
            image: 'Project1.png',
            description: 'A modern, responsive portfolio showcasing my skills in ReactJs & Tailwind CSS, projects, and experience as a Full Stack Software Engineer.',
            button: 'Visit Site',
            link: "https://mucyoelie.netlify.app/",
            github: "https://github.com/mucyoelie/my-project",
        },
        {
            title: 'KBL Coffee',
            image: 'Project2.png',
            description: 'KBL Coffee is a business website for buying and selling coffee. Built with React and Tailwind CSS, it offers a modern UI, responsive design, and seamless navigation.',
            button: 'Visit Site',
            link: "https://www.kblcoffee.com/",
            github: "https://github.com/mucyoelie/KBLCoffee",
        },
        {
            title: 'QuizMaster',
            image: 'Project3.png',
            description: 'QuizMaster is an interactive quiz platform with real-time multiplayer, categories, and leaderboards, designed using React, Node.js, and MongoDB.',
            button: 'Visit Site',
            link: "https://quizmaster.example.com",
            github: "https://github.com/mucyoelie/QuizMaster",
        },
    ];

    return (
        <section id="project" className="bg-gray-100 py-10 px-6 dark:bg-gray-900 scroll-mt-24">
            <div className="mx-auto text-start max-w-7xl xl:ml-24 ">
                <h1 className="text-3xl md:text-4xl font-bold lg:text-center xl:text-start  text-gray-700 dark:text-gray-200 mb-4 xl:mx-0 lg:mx-[7%] md:mx-[6%] animate-bounce">
                    Projects
                </h1>
                <p className="text-gray-500 dark:text-gray-300 lg:text-center xl:text-start text-lg mb-8 xl:mx-0 lg:mx-[7%] md:mx-[6%]">
                    Here are some of the projects I've successfully completed.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2  gap-8 xl:w-[80rem] xl:mx-0 lg:mx-[7%] md:mx-[6%]">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-5 rounded-lg shadow-lg dark:bg-gray-800">
                            {/* Project Image */}
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="h-44 sm:h-48 md:h-52 lg:h-60 w-full object-cover rounded-lg mb-10"
                            />

                            {/* Project Title */}
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                                {project.title}
                            </h2>

                            {/* Project Description */}
                            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
                                {project.description}
                            </p>

                            {/* Buttons */}
                            <div className="mt-4 flex flex-wrap gap-3 items-center justify-center sm:justify-start">
                                {/* Visit Site Button */}
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-[#006242] text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition text-sm"
                                >
                                    {project.button}
                                </a>

                                {/* GitHub Icon */}
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-600 dark:text-gray-300 text-2xl hover:text-gray-900 transition"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
