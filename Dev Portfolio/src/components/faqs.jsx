import { useState } from 'react';

function FAQs() {
    const faqData = [
        {
            question: "What technologies are you proficient in as a frontend developer?",
            answer: "As a frontend developer, I have expertise in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React.js, with a strong focus on creating complex and responsive user interfaces."
        },
        {
            question: "How did you get started with React?",
            answer: "My journey began with mastering vanilla JavaScript, which provided a solid foundation for understanding React. I then progressed to learning React basics like components, state, and props through practical projects."
        },
        {
            question: "What is your most notable project?",
            answer: "One of my standout projects is 'Write Wise', a comprehensive blogging platform featuring authentication, CRUD operations, post-saving capabilities, and an integrated chatbot for content creation."
        },
        {
            question: "What tools do you use for debugging and testing React applications?",
            answer: "I utilize React Developer Tools for debugging and testing frameworks like Jest and React Testing Library to ensure application reliability."
        },
        {
            question: "What certifications do you hold?",
            answer: "I earned a React Development certificate from the Saylani Mass IT Training Program (SMIT), showcasing my commitment to continuous learning."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className="px-0 py-6 md:px-6">
                <div className="text-white font-bold mb-6 ml-3">
                    <h2 className='text-2xl md:text-3xl'>Frequently Asked<span className="text-amber-200">Questions</span></h2>
                </div>
                <div className="flex pb-6 justify-center">
                    <div className="space-y-5 w-full lg:w-2/3">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="border border-amber-200 rounded-md overflow-hidden"
                            >
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center px-4 py-3 text-left bg-gray-800 active:opacity-[0.8]"
                                >
                                    <span className="text-gray-200 font-medium">
                                        {item.question}
                                    </span>
                                    <span className="text-gray-200 font-bold">
                                        {activeIndex === index ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Accordion Content */}
                                <div
                                    className={`p-0 transition-all duration-400 ease-in-out ${activeIndex === index ? "max-h-40" : "max-h-0"
                                        }`}
                                    style={{
                                        overflow: "hidden",
                                    }}
                                >
                                    <div className="h-full px-4 py-3 text-gray-200 bg-gray-700 border-t border-amber-200">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQs;