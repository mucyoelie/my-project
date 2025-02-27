import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-white xl:py-10 py-4 px-5 h-20 border-t-2  dark:bg-gray-900  border-[#006242] dark:border-[#B0B0B0]">
      <div className="max-w-4xl mx-auto text-center">
        <p className=" text-lg sm:text-lg text-gray-900 dark:text-gray-100 font-bold">
        {new Date().getFullYear()} &copy; Developed  by <span className='text-[#006242] font-bold mx-1 text-xl'>  mucyo.web</span>
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;