import Carousel from './carousel';
import { ImArrowUpRight2 } from "react-icons/im";
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

function Projects() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col col-span-2 md:col-span-1 row-span-2 gap-4 px-0">
                {/* Event Titles Section */}
                <div className="bg-transparent text-white py-3 px-0 border border-white/25 rounded-md flex-grow backdrop-blur-sm">
                    <NavLink to="../projects" className="flex justify-between cursor-pointer">
                        <h2 className="font-bold text-xl mb-2 underline px-3">PROJECTS</h2>
                        <div className="flex item-center">
                            <ImArrowUpRight2 className="text-2xl font-bold" />
                        </div>
                    </NavLink>

                    <Carousel />
                </div>

                {/* Social Links Section */}
                <div className="bg-transparent text-white py-3 px-1 border border-white/25 rounded-md flex justify-evenly flex-wrap gap-2 backdrop-blur-sm">
                    <a href="https://www.linkedin.com/in/muhammad-mudassir-awan-b98147284" target='_blank' className="hover:underline">LinkedIn</a>
                    <a href="https://github.com/Mudasssirr" target='_blank' className="hover:underline">Github</a>
                    <a href="mailto:muhammadmudassir.090@gmail.com" rel="noopener noreferrer" className="hover:underline">Email</a>
                </div>
            </motion.div>
        </>
    );
}

export default Projects;