import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGithub, FaNpm } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";

function Skills() {
    return (
        <>
            {/* Bottom Middle - Skills*/}
            <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="bg-transparent border border-white/25 rounded-md p-3 col-span-2 md:col-span-1 backdrop-blur-sm">
                <h2 className="text-white text-xl font-bold underline">SKILLS</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <FaHtml5 className="text-gray-400 text-4xl hover:text-[#E34F26] transition" title="HTML5" />
                    <FaCss3Alt className="text-gray-400 text-4xl hover:text-[#1572B6] transition" title="CSS3" />
                    <IoLogoJavascript className="text-gray-400 text-4xl hover:text-[#F7DF1E] transition" title="JavaScript" />
                    <FaBootstrap className="text-gray-400 text-4xl hover:text-[#7952B3] transition" title="Bootstrap" />
                    <RiTailwindCssFill className="text-gray-400 text-4xl hover:text-[#06B6D4] transition" title="TailwindCSS" />
                    <FaReact className="text-gray-400 text-4xl hover:text-[#61DAFB] transition" title="React" />
                    <SiVite className="text-gray-400 text-4xl hover:text-[#646CFF] transition" title="Vite" />
                    <RiFirebaseFill className="text-gray-400 text-4xl hover:text-[#FFCA28] transition" title="Firebase" />
                    <FaGithub className="text-gray-400 text-4xl hover:text-[#181717] transition" title="Github" />
                    <FaNpm className="text-gray-400 text-4xl hover:text-[#CB3837] transition" title="Npm" />
                </div>
            </motion.div>
        </>
    );
}

export default Skills;