import React, { useState } from "react";
import Navbar from '../components/navbar';
import { motion } from "framer-motion";
import GeminiClone from '../assets/Gemini-Clone.png'
import BarcodeScanner from '../assets/Barcode-Scanner.png'
import Wellnest from '../assets/Wellnest.png'
import EarthModel from '../assets/Earth-Model.png'
import WriteWise from '../assets/Write-Wise.png'

function ProjectsPage() {
    const projects = [
        {
            title: "Gemini Clone",
            description: "An AI-driven application replicating Gemini, generating context-aware, real-time text via the Gemini API for content creation, brainstorming, and productivity needs.",
            techStack: "React, Vite, Tailwind CSS, Gemini API",
            image: GeminiClone,
            link: "https://ask-my-gemini.netlify.app",
            repo: "https://github.com/Mudasssirr/Gemini-Clone",
        },
        {
            title: "Barcode Scanner",
            description: "A barcode scanner retrieving product details like name, manufacturer, origin, and nutrition information, offering real-time insights for consumers, retailers, and manufacturers.",
            techStack: "React, Vite, Zxing, Open Food Facts API",
            image: BarcodeScanner,
            link: "https://quick-barcode-scanner.netlify.app",
            repo: "https://github.com/Mudasssirr/Barcode-Scanner",
        },
        {
            title: "Wellnest",
            description: "A platform for booking doctors and mental health consultations, featuring scheduling, enrolling, filtering, and seamless text consultations, plus mental health blogs, FAQs, and interactive tools.",
            techStack: "React, Bootstrap, Firebase, JestDOM, DateFNS",
            image: Wellnest,
            link: "https://wellnestt.netlify.app",
            repo: "https://github.com/Mudasssirr/Wellnest",
        },
        {
            title: "Earth 3D Model",
            description: "An engaging 3D Earth model in outer space, built with Vite and React Three Fiber, showcasing realistic animations and interactive exploration for educational and creative experiences.",
            techStack: "React, Vite, Three Fiber, ThreeJS",
            image: EarthModel,
            link: "https://earth-3dmodel.netlify.app",
            repo: "https://github.com/Mudasssirr/Earth-3D-Model",
        },
        {
            title: "Write Wise",
            description: "A feature-rich blogging platform with authentication, CRUD, polls, archives, search, analytics, profile viewing, and a built-in chatbot for blog creation and site guidance.",
            techStack: "VanillaJS, Bootstrap, Firebase, Botpress",
            image: WriteWise,
            link: "https://write-wise.netlify.app",
            repo: "https://github.com/Mudasssirr/Blogging-Website",
        },
    ];

    const [visibleProjects, setVisibleProjects] = useState(3);

    const handleSeeMore = () => {
        setVisibleProjects((prev) => prev + 3);
    };

    const handleHideAll = () => {
        setVisibleProjects(3);
    };

    return (
        <>
            <Navbar />
            <div className="px-0 py-8 md:px-6">
                <div className="text-white font-bold mb-6 ml-3">
                    <h2 className='text-3xl'>Featured <span className="text-amber-200">Projects</span></h2>
                    <p className='text-gray-200'>Here are some of the selected projects that showcase my passion for Frontend Development</p>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col gap-8"
                >
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center gap-6 border-b border-gray-300 pb-6"
                        >
                            {/* Image Section */}
                            <div className="w-full lg:w-1/2">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full rounded-xl shadow-md"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
                                <h3 className="text-2xl font-semibold text-amber-200 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                                    {project.techStack.split(', ').map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col md:flex-row gap-4 w-full">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full md:w-36 inline-block bg-gray-800 text-amber-200 font-bold px-4 py-2 rounded-md text-center transition-all hover:bg-gray-700"
                                    >
                                        Project Demo
                                    </a>
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full md:w-36 inline-block bg-gray-800 text-white font-bold px-4 py-2 rounded-md text-center transition-all hover:bg-gray-700"
                                    >
                                        Github Repo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
                <div className="text-center mt-6">
                    {visibleProjects < projects.length ? (
                        <button
                            onClick={handleSeeMore}
                            className="text-lg font-bold text-amber-200 cursor-pointer hover:underline"
                        >
                            SEE MORE
                        </button>
                    ) : (
                        <button
                            onClick={handleHideAll}
                            className="text-lg font-bold text-red-500 cursor-pointer hover:underline"
                        >
                            HIDE
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProjectsPage;