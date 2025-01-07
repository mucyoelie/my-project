import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg mb-4">Connect with me on social media</p>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 justify-center  xl:mx-[-5%]">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl hover:text-teal-500 transition duration-300">
            <FaLinkedin size={21}/>
          </a>
          {/* GitHub */}
          <a href="https://github.com/mucyoelie" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl hover:text-teal-500 transition duration-300">
            <FaGithub size={24}/>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/elie_mucyo/" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl hover:text-teal-500 transition duration-300">
            <FaInstagram size={24}/>
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/250783175236" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl hover:text-teal-500 transition duration-300">
            <IoLogoWhatsapp size={24}/>
          </a>
          {/* Phone */}
          <a href="tel:+250783175236" className="text-3xl sm:text-4xl md:text-5xl hover:text-teal-500 transition duration-300">
            <BsFillTelephoneFill size={24}/>
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com/mucyo.eliequintano/" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl hover:text-teal-500 transition duration-300">
            <FaFacebook size={24}/>
          </a>
          {/* Twitter */}
          <a href="https://x.com/ElieM45470" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl hover:text-teal-500 transition duration-300">
            <FaTwitter size={24}/>
          </a>
          {/* Upwork */}
          <a href="https://www.upwork.com/freelancers/~016fc2630153b19d10" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl md:text-5xl hover:text-teal-500 transition duration-300">
            <SiUpwork size={24}/>
          </a>
        </div>

        <p className="mt-6 text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Elie Joseph MUCYO. All rights reserved. || Developed by Elie Joseph MUCYO
        </p>
      </div>
    </footer>
  );
};

export default Footer;