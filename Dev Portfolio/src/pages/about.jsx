import Navbar from '../components/navbar';
import Experience from '../components/experience';
import FAQs from '../components/faqs';
import Avatar from '../assets/3D-Avatar.png'
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function AboutPage() {
    return (
        <>
            <Navbar />
            <div className="px-0 py-8 md:px-6">
                <div className="text-white font-bold mb-6 ml-3">
                    <h2 className='text-3xl'>My <span className="text-amber-200">Background</span></h2>
                    <p className='text-gray-200'>Here is everything you need to know about my experience.</p>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col gap-8"
                >
                    <div
                        className="flex flex-col md:flex-row items-center gap-6 border-b border-gray-300"
                    >
                        {/* Image Section */}
                        <div className="w-full flex items-center justify-center lg:w-1/2 animate-float">
                            <img
                                src={Avatar}
                                alt="Avatar"
                                className="rounded-xl w-[350px] h-[350px] md:w-[400px] md:h-[400px] "
                            />
                        </div>

                        {/* Details Section */}
                        <div className="md:w-full lg:w-1/2 flex flex-col justify-center text-center md:text-left">
                            <h3 className="text-2xl font-semibold text-amber-200 mb-2">
                                ABOUT ME
                            </h3>
                            <p className="text-gray-300 mb-4">Hi, I'm a dedicated Frontend Developer with expertise in building intuitive user interfaces using JavaScript and ReactJS, complemented by styling frameworks like Bootstrap and Tailwind. With a solid foundation in core web technologies—HTML, CSS, and JavaScript—and backend integration using Firebase, I thrive under pressure and excel at solving complex challenges, making me a valuable asset to any organization.</p>

                            <div className="flex flex-col items-center md:flex-row gap-2 w-full">
                                <a
                                    href="mailto:muhammadmudassir.090@gmail.com"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-36 inline-block bg-gray-800 text-white font-bold px-4 py-2 rounded-md text-center transition-all hover:bg-gray-700"
                                >
                                    Get in Touch
                                </a>
                                <div className='flex items-center text-4xl'>
                                    <a href="https://www.linkedin.com/in/muhammad-mudassir-awan-b98147284" target='_blank'>
                                        <FaLinkedin className='bg-gray-900 text-gray-300 rounded-2xl cursor-pointer hover:bg-gray-300 hover:text-gray-800 transition' />
                                    </a>
                                    <a href="https://github.com/Mudasssirr" target='_blank'>
                                        <FaGithub className='bg-gray-900 text-gray-300 rounded-2xl cursor-pointer hover:bg-gray-300 hover:text-gray-800 transition' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Experience />

            <FAQs />
        </>
    );
}

export default AboutPage;