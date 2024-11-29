import { ImArrowUpRight2 } from "react-icons/im";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

function About() {
    return (
        <>
            {/* Bottom Left */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="bg-transparent border border-white/25 text-white rounded-md p-3 col-span-2 md:col-span-2 backdrop-blur-sm">
                <NavLink to="../about" className="flex justify-between cursor-pointer">
                    <h1 className='text-xl font-bold underline text-white'>ABOUT</h1>
                    <div className='flex item-center'>
                        <ImArrowUpRight2 className='text-2xl font-bold' />
                    </div>
                </NavLink>
                <div className=' flex items-end'>
                    <p className="text-gray-400" style={{ fontSize: '14px' }}>
                        I'm a Front-End Developer with over 2 years of hands-on experience in creating visually appealing and responsive Web Applications. My expertise lies in crafting static or dynamic user interfaces using JavaScript and React.
                    </p>
                </div>
            </motion.div>
        </>
    );
}

export default About;