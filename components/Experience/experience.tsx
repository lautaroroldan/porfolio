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
        description: "Development of web applications using React, Next.js, Node.js, and PostgreSQL. Implementation of RESTful APIs. Integration of third-party services. Collaboration with the team to implement new features and maintain code quality, documentation, and tests.",
    },
    {
        position: "Full Stack Developer",
        company: "Freelance",
        dateStart: "2024",
        dateEnd: "Present",
        description: "Development of web applications using React, Next.js, Node.js, and PostgreSQL. Implementation of RESTful APIs. Integration of third-party services. Collaboration with the team to implement new features and maintain code quality, documentation, and tests.",
    }
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