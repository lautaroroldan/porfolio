import React from 'react'
import ExperienceItem, { type ExperienceItemProps } from '@/components/Experience/experience-item'
import { inter } from '@/app/fonts/fonts'
import Section from '@/components/section'

const experiences: ExperienceItemProps[] = [
    {
        position: "Full Stack Developer",
        company: "Advenio Software",
        dateStart: "2022",
        dateEnd: "2024",
        description: "Developed new screens and an accounting system with features for managing accounts, suppliers, and payments. Managed API development and maintenance using Java and the Spring Boot framework with Hibernate for data persistence, and implemented new features based on client requests.",
    },
    {
        position: "Full Stack Developer",
        company: "Freelance",
        dateStart: "2024",
        dateEnd: "Present",
        description: "As a freelance developer, I had the opportunity to work on a handball project where I was the sole frontend developer. This experience allowed me to deepen my skills in React and other tools within its ecosystem, pushing me to deliver a fully functional and responsive interface, managing both the creative and technical aspects of the project independently, adapting and solving challenges as they arose. I'm always ready for new challenges and eager to continue growing, learning, and contributing to innovative projects.",
    },
]

function Experience() {
    return (
        <Section>
            <h2 className={`text-xl font-bold text-white ${inter.className}`}>Experience</h2>
            <ol className="relative border-s border-custom-gray">
                {experiences.map((experience, index) => (
                    <li className="ms-4" key={index}>
                        <ExperienceItem {...experience} />
                    </li>
                ))}
            </ol>
        </Section>


    )
}

export default Experience