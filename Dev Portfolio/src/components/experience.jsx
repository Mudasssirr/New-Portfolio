import { details } from 'framer-motion/client';
import './experience.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
    const AboutDetails = [
        {
            companyName: "WAAPS",
            position: 'Frontend Developer',
            aboutPosition: "As a seasoned Frontend developer at WAAPS Pvt Ltd, I created & maintained user friendly UI along with integrating APIs. My expertise lies in architecting user-friendly admin panels and dashboards, leveraging cutting-edge technologies like CSS, Bootstrap, and Tailwind CSS. With a passion for staying abreast of industry advancements, I collaborated closely with teams to ensure seamless frontend-backend integration and delivered top-tier web solutions punctually.",
            startDate: 'Oct-2023',
            endDate: 'Dec-2023',
            side: 'right'
        },
        {
            companyName: "Freelance",
            position: 'Frontend Developer',
            aboutPosition: "As a passionate Frontend Developer working on Freelance, I provide IT services globally, remotely creating websites and expertly resolving bugs. Leveraging my expertise in React.js, I ensure seamless user experiences.",
            startDate: 'May-2023',
            endDate: 'Present',
            side: 'left'
        },
        {
            companyName: "SMIT",
            position: 'Frontend Trainee',
            aboutPosition: "As a Frontend Trainee at SMIT, I worked with other talented individuals to create Progressive Web Apps. I learned & Implemented coding solutions into many different projects for both business & personal. Along with completing daily tasks & challenges to make me a better programmer.",
            startDate: 'May-2023',
            endDate: 'Dec-2023',
            side: 'right'
        },
    ];

    return (
        <>
            <div className="px-0 md:px-6">
                <div className="text-white font-bold mb-6 ml-3">
                    <h2 className='text-3xl'>My <span className="text-amber-200">Experience</span></h2>
                </div>
                <div className="flex flex-col pb-6 md:flex-row items-center border-b border-gray-300">
                    <VerticalTimeline>
                        {AboutDetails.map((detail, index) => (
                            <VerticalTimelineElement
                                key={index}
                                className={'vertical-timeline-element--work'}
                                position={detail.side}
                                contentStyle={{ background: '#1f2937', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid #1f2937' }}
                            >
                                <div className='p-3'>
                                    <h3 className="text-amber-200 font-bold text-lg">{detail.companyName} ({detail.position})</h3>
                                    <h5 className='text-gray-100 text-sm'>
                                        {detail.startDate} - {detail.endDate}
                                    </h5>
                                    <h5 className='text-gray-300'>
                                        {detail.aboutPosition}
                                    </h5>
                                </div>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
}

export default Experience;