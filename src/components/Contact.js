import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import emailjs from "emailjs-com"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm("service_aik7uq7", "mucyoelie84@gmail.com", e.target, "52dm6uzigMPT3hDqZ") 
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          console.log(result.text);
          setFormData({ name: "", email: "", phone: "", message: "" }); // Clear the form after sending
        },
        (error) => {
          alert("Error: Message not sent!");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="xl:scroll-mt-24  bg-gray-100 from-blue-500 via-teal-500 to-green-500 py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 ">
      <div className=" xl:text-start sm:text-center text-center text-gray-600 dark:text-gray-200 xl:ml-20">
        <h2 className="text-5xl sm:text-4xl font-bold mb-6 animate-bounce mx-auto xl:mx-[20px]">Contact Me</h2>
        <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto xl:mx-[20px]">
          I would love to hear from you! Whether you have a question or an opportunity you'd like to discuss, feel free to reach out to me.
        </p>

        <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8  dark:bg-gray-800  xl:mr-20 xl:ml-2 lg:mx-[7%] md:mx-[2%] dark:text-gray-100">
          <form onSubmit={handleSubmit} className="border-b-2 border-[#006242]">
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
              <div className="dark:text-gray-100">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2 dark:text-gray-100">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2 dark:text-gray-100">Telephone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2 dark:text-gray-100">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-gray-600 font-semibold mb-2 dark:text-gray-100">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              ></textarea>
            </div>

            <div className="mt-8 text-start">
              <button type="submit" className="bg-teal-600 text-white px-6 py-3 my-5 rounded-lg hover:bg-teal-500 transition duration-300">
                Send Message
              </button>
            </div>
          </form>

          <p className="text-lg font-bold mt-6">Connect with me on social media</p>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 justify-center py-5">
            {/*Linkedin */}
            <a href="https://www.linkedin.com" 
             target="_blank" rel="noopener noreferrer" 
             className="text-blue-600 hover:text-teal-500">
            <FaLinkedin size={35} />
            </a>
             {/*Github */}
            <a href="https://github.com/mucyoelie" 
             target="_blank" rel="noopener noreferrer" 
            className="text-gray-900 hover:text-teal-500">
            <FaGithub size={35} />
            </a>
             {/*Instagram */}
            <a href="https://www.instagram.com/mucyo.web/" 
             target="_blank" rel="noopener noreferrer" 
            className="text-red-700 hover:text-teal-500">
            <FaInstagram size={35} />
            </a>
             {/*WhatsApp */}
            <a href="https://wa.me/250783175236" 
             target="_blank" rel="noopener noreferrer" 
            className="text-green-700 hover:text-teal-500">
            <IoLogoWhatsapp size={35} />
            </a>
             {/*Phone */}
            <a href="tel:+250783175236" className="text-blue-300 hover:text-teal-500">
              <BsFillTelephoneFill size={35} />
              </a>
               {/*FaceBook*/}
            <a href="https://www.facebook.com/mucyo.eliequintano/" 
            target="_blank" rel="noopener noreferrer" 
            className="text-blue-600 hover:text-teal-500">
              <FaFacebook size={35} />
              </a>
               {/*Twitter*/}
            <a href="https://x.com/ElieM45470" 
            target="_blank" rel="noopener noreferrer" 
            className="text-blue-500 hover:text-teal-500">
              <FaTwitter size={35} />
              </a>
               {/*Upwork */}
            <a href="https://www.upwork.com/freelancers/~016fc2630153b19d10" 
            target="_blank" rel="noopener noreferrer" 
            className="text-black hover:text-teal-500">
              <SiUpwork size={35} />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
