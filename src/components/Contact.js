import React, { useState } from "react";
import emailjs from "emailjs-com"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call EmailJS send function
    emailjs
      .sendForm("service_aik7uq7", "mucyoelie84@gmail.com", e.target, "52dm6uzigMPT3hDqZ") // Replace with your actual IDs
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Error: Message not sent!");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-100 from-blue-500 via-teal-500 to-green-500 py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto xl:text-start sm:text-center text-center text-gray-600 dark:text-gray-200">
        <h2 className="text-5xl sm:text-4xl font-bold mb-6 animate-bounce xl:ml-[-12%] ">Contact Me</h2>
        <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto xl:ml-[-12%]">
          I would love to hear from you! Whether you have a question or an opportunity you'd like to discuss, feel free to reach out to me.
        </p>

        <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8  dark:bg-gray-800 xl:ml-[-12%] lg:mx-[2%] md:mx-[2%]">
          <form onSubmit={handleSubmit}>
            <div className="grid xl:grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2 ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Telephone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                />
              </div>
            </div>

              <div className="mt-6">
              <label htmlFor="message" className="block text-gray-600 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className=" text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              ></textarea>
            </div>

            <div className="mt-8 text-start">
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;