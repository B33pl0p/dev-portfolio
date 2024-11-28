"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

// Array of project data
const projects = [
  {
    title: "AI-Powered E-commerce",
    description: "A project to power e-commerce with AI-based reverse image search and recommendations.",
    imageUrl: "/images/image_search.png",
    link: "https://github.com/B33pl0p/ai-powered-ecommerce", // Replace with actual project link
    buttonText: "View Project"
  },
  {
    title: "Just Another Text Editor",
    description: "A Text Editor with advanced features like RSA encryption entirely made on python.",
    imageUrl: "/images/texted.png", // Add the correct image
    link: "https://github.com/B33pl0p/JATE", // Replace with actual project link
    buttonText: "View Project"
  },
  {
    title: "Interactive Neural Style Transfer",
    description: "Transform images using a neural style transfer model powered by TensorFlow.",
    imageUrl: "/images/neural.png", // Add the correct image
    link: "https://github.com/B33pl0p/AI-lab-project", // Replace with actual project link
    buttonText: "View Project"
  },
  {
    title: "Gesture Controlled Car with Fall Detection",
    description: "An Arduino-based car with gesture controls, fall detection, and SMS alerts.",
    imageUrl: "/images/gesturecontrol.png", // Add the correct image
    link: "https://github.com/B33pl0p/AI-lab-project", // Replace with actual project link
    buttonText: "View Project"
  },
];

const ProjectsCard = () => {
  return (
    <section id='projects' className="text-white px-3 py-8 sm:px-3 md:px-7 lg:px-16">
      <h1 className="text-3xl font-semibold">Projects</h1> 
      <p className="mt-5">Here are some of the projects I’ve worked on.</p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-3 md:gap-4 lg:gap-6"> {/* Adjusted gaps */}
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem
                translateZ="100"
                className="w-full mt-4"
              >
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    height="500"
                    width="500"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                )}
              </CardItem>
              <div className="flex justify-center items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-6 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">{project.buttonText}</a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCard;
