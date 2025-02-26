import React from "react";

const About = () => {
  return (
    <div id="about"  className="relative bg-gray-100 -top-20 lg:top-[-15px] dark:bg-gray-900 scroll-mt-24">
    <section  className="bg-gray-100 p-6  sm:p-10 md:p-16 lg:p-10 text-left w-[90%] sm:w-[80%] md:w-[80%] 
    lg:w-[80%] xl:w-[58%]  mx-auto mt-[35rem] xl:mt-[40rem]  xl:ml-24 rounded-lg dark:bg-gray-900 ">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-4 sm:mb-6 animate-bounce dark:text-gray-200">
      About me
    </h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed dark:text-gray-200 font-raleway">
      Hi,I'm called Elie Joseph MUCYO,
    I’m passionate Software Developer with expertise in full-stack development, 
    focusing on building responsive and user-friendly web applications. Skilled in HTML, 
    CSS, Tailwind CSS, JavaScript, React, Next.js, Node.js, and WordPress, I love tackling complex challenges and creating impactful solutions.
    <br />
    <br />
    I thrive on learning, innovation, and teamwork to bring ideas to life. My passion lies in crafting functional, 
    scalable, and visually appealing applications that make a difference. 
    I am committed to continuous learning and staying updated with the latest tech trends, 
    ensuring that my skills evolve with the ever-changing tech landscape.
    <br />
    <br />
    Outside of work, I enjoy contributing to open-source projects and connecting with the developer community, 
    as I believe in the power of collaboration and shared knowledge.
    </p>
   {/* Image content */}
          
           <div className="flex sm:justify-end lg:justify-end  lg:w-[88%]  md:justify-center md:ml-[-17%] xl:absolute xl:top-[5%] xl:right-[5%] xl:w-[28%]">
            <img
              src="Mucyo.png" // Replace with your image path
              alt="Elie Joseph MUCYO"
              className="w-full sm:w-[80%] md:w-[70%] lg:w-[90%] xl:w-[80%] h-auto object-cover rounded-2xl border-0 border-gray-200 dark:border-gray-600"
            />
          </div>
  </section>
  </div>
  );
};

export default About;