import { motion } from "framer-motion";
import MyImage from '../assets/My-Image.jpg'

function MiddleImage() {
    return (
        <>
            {/* Top Middle Image */}
            <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="bg-transparent overflow-hidden col-span-2 md:col-span-1 p-0 md:w-full md:h-full">
                <img
                    src={MyImage}
                    alt="My Img"
                    className="w-full h-auto md:w-full md:h-full object-cover rounded-xl"
                />
            </motion.div>
        </>
    );
}

export default MiddleImage;