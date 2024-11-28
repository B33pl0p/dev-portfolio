"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"; // Import icons

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form submission logic
    // You can integrate with an API or service like EmailJS or Formspree
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="text-white bg-transparent px-3 py-8 sm:px-3 md:px-7 lg:px-16">
             <h1 className="text-3xl font-semibold mb-5">Contact</h1> 
      <div className="container mx-auto px-4">


        <div className="flex justify-center">
          <div className="w-full sm:w-2/3 lg:w-1/2 bg-transparent p-8 rounded-xl shadow-lg border border-white">
            {isSubmitted ? (
              <div className="text-center text-green-500">
                <h3 className="text-2xl font-semibold">Thank you for reaching out!</h3>
                <p>Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-semibold"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 mt-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-white"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-semibold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 mt-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-white"
                      placeholder="Your email address"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-semibold"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 mt-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-white"
                      rows="6"
                      placeholder="Your message"
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-white mb-4">
            Connect with me:
          </h3>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/B33pl0p"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-indigo-600 transition duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/biplopgiri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-indigo-600 transition duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/B33pl0p"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-indigo-600 transition duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:biplav120@gmail.com"
              className="text-3xl text-white hover:text-indigo-600 transition duration-200"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
