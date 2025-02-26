import React from "react";

const Home = () => {
  return (
    <div  id="home" className="bg-gray-100 xl:h-[40rem] absolute top-0 dark:bg-gray-900 scroll-mt-24 ">
    <section className="bg-gray-100 p-6 sm:p-10 md:p-16 lg:p-10 text-left w-[90%] sm:w-[80%] md:w-[80%] lg:w-[80%]
    xl:w-[50%] h-auto mx-auto mt-40 mb-20 xl:ml-24  rounded-lg  dark:bg-gray-900">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-4 sm:mb-6 animate-bounce dark:text-gray-200">
        Hi, I'm a Software Developer
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed dark:text-gray-200">
        I'm passionate software developer skilled in crafting functional,
        scalable, and visually appealing applications using technologies like
        JavaScript, React.js, and Node.js. I thrive on learning, innovation, and
        teamwork to bring ideas to life.
      </p>
      <a href="#contact">
      <button className="bg-gray-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-400 transition duration-300 animate-bounce">
        Contact me
      </button>
      </a>
    </section>
    </div>
  );
};

export default Home;