import { motion } from "framer-motion";

function MainText() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-transparent text-white rounded-md border border-white/25 flex flex-col justify-around p-3 col-span-2 backdrop-blur-sm"
        >
            <h1 className="text-3xl font-bold mb-4">
                Hi, I'm <span className="text-amber-200">Mudassir Awan.</span>
                <br />I design and build meaningful experiences.
            </h1>
            <p className="text-gray-400" style={{ fontSize: '14px' }}>
                As a contantly evolving digital creator, I am particularly interested in product-facing positions where I can help make an organization-wide impact.
            </p>
        </motion.div>
    );
}

export default MainText