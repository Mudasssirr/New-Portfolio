import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import MyResume from '../assets/My-Resume.pdf';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-transparent text-white rounded-md px-4 py-3 border border-white/25 shadow-md backdrop-blur relative z-50">
            <div className="mx-auto flex justify-between items-center">
                {/* Logo */}
                <NavLink to="../" className="text-lg font-bold">
                    {'<Mudassir Awan />'}
                </NavLink>

                {/* Hamburger Menu (Dropdown Trigger for Mobile) */}
                <div className="relative sm:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 px-4 bg-gray-900 text-amber-100 rounded-md hover:bg-gray-800 focus:outline-none"
                    >
                        ☰
                    </button>

                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg border border-gray-700 z-50">
                            <NavLink to="/about"
                                className="block px-4 py-2 hover:bg-gray-800 text-white"
                            >
                                About
                            </NavLink>
                            <NavLink to="/projects"
                                className="block px-4 py-2 hover:bg-gray-800 text-white"
                            >
                                Projects
                            </NavLink>
                            <a
                                href={MyResume}
                                download
                                target="_blank" rel="noopener noreferrer"
                                className="block px-4 py-2 bg-gray-900 text-amber-200 font-bold rounded-md hover:bg-gray-700 transition"
                            >
                                Download CV
                            </a>
                        </div>
                    )}
                </div>

                {/* Links for Larger Screens */}
                <div className="hidden sm:flex items-center gap-6">
                    <NavLink to="/about"
                        className="hover:underline text-white"
                    >
                        About
                    </NavLink>
                    <NavLink to="/projects"
                        className="hover:underline text-white"
                    >
                        Projects
                    </NavLink>
                    <a
                        href={MyResume}
                        download
                        target="_blank" rel="noopener noreferrer"
                        className="bg-gray-800 text-amber-200 font-bold px-4 py-2 rounded-md hover:bg-gray-700 transition"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;
