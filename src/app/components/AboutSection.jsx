"use client"
import React, { useState } from 'react'

const AboutSection = () => {
  // State to track which section is active (1 for Skills, 2 for Education)
  const [activeSection, setActiveSection] = useState(1) // Start with Skills visible

  return (
    <section id='about' className=" text-white px-3 py-8 sm:px-3 md:px-7 lg:px-16 ">
      <div className="max-w-3xl ">
        {/* About Text */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold">About Me!</h1>
          <p className="text-lg text-gray-300">
            I'm currently pursuing a B.E. in Electronics and Communication Engineering at Tribhuwan University in Kathmandu, Nepal. I have a strong passion for technology, especially in the fields of web development and machine learning. I enjoy solving real-world problems through coding.
          </p>

          {/* Clickable Section for Skills and Education */}
          <div className="flex flex-row space-x-4">
            {/* Skills Tab */}
            <div>
              <h2
                className={`text-2xl font-semibold cursor-pointer ${activeSection === 1 ? 'underline' : 'hover:underline'}`}
                onClick={() => setActiveSection(activeSection === 1 ? null : 1)} // Toggle Skills
              >
                Skills
              </h2>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${activeSection === 1 ? 'max-h-96' : 'max-h-0'}`}
              >
                {activeSection === 1 && (
                  <ul className="list-disc pl-6 text-gray-300 mt-4 space-y-2">
                    <li> Python, SQL, C, C++, JavaScript</li>
                    <li>React Native, Node.js, Express.js</li>
                    <li>Machine Learning</li>
                    <li><strong>Version Control:</strong> Git</li>
                    <li><strong>Languages:</strong> English, Nepali, Hindi</li>
                  </ul>
                )}
              </div>
            </div>

            {/* Education Tab */}
            <div>
              <h2
                className={`text-2xl font-semibold cursor-pointer ${activeSection === 2 ? 'underline' : 'hover:underline'}`}
                onClick={() => setActiveSection(activeSection === 2 ? null : 2)} // Toggle Education
              >
                Education
              </h2>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${activeSection === 2 ? 'max-h-96' : 'max-h-0'}`}
              >
                {activeSection === 2 && (
                  <p className="text-gray-300 mt-4 pl-6">
                    <strong>B.E. in Electronics and Communication Engineering</strong><br />
                    Tribhuwan University, Kathmandu, Nepal (March 2021 - Present)
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
