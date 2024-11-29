import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import GeminiClone from '../assets/Gemini-Clone.png'
import BarcodeScanner from '../assets/Barcode-Scanner.png'
import Wellnest from '../assets/Wellnest.png'

function Carousel() {
    const settings = {
        dots: false, // No dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Auto-slide every 2 seconds
        arrows: false, // No side arrows
        lazyLoad: 'ondemand', // Lazy loading enabled
    };

    // Array of project data
    const projects = [
        {
            id: 1,
            title: "Gemini Clone",
            link: "https://ask-my-gemini.netlify.app",
            image: GeminiClone,
        },
        {
            id: 2,
            title: "Barcode Scanner",
            link: "https://quick-barcode-scanner.netlify.app",
            image: BarcodeScanner,
        },
        {
            id: 3,
            title: "Wellnest",
            link: "https://wellnestt.netlify.app",
            image: Wellnest,
        },
    ];

    return (
        <>
            {/* Image Slider */}
            <div className="bg-transparent rounded-xl overflow-hidden p-0 mb-4">
                <Slider {...settings} className="custom-slider">
                    {projects.map(project => (
                        <img
                            key={project.id}
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full rounded-2xl"
                        />
                    ))}
                </Slider>
            </div>

            {/* Project Links */}
            {projects.map(project => (
                <div key={project.id} className="py-0">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between cursor-pointer"
                    >
                        <h2 className="font-bold text-sm mb-2">
                            {project.id}. <span className="hover:underline">{project.title}</span>
                        </h2>
                        <div className="flex items-center">
                            <FaArrowUpRightFromSquare className="text-2xl font-bold" />
                        </div>
                    </a>
                </div>
            ))}
        </>
    );
}

export default Carousel;