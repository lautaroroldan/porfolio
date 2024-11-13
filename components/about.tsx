import React from 'react'
import Section from './section'

function About() {
    return (
        <Section>
            <article className='prose-base text-custom-gray prose-p:text-base prose-p:leading-normal w-full'>
                <p>
                    Hello! <span className='text-white font-bold'>I&apos;m Lautaro Roldan</span>, a fullstack web developer from Argentina with over 2 years of experience. Currently, I&apos;m focusing on frontend development within the React ecosystem and freelancing on diverse projects.
                </p>
                <p>
                    I&apos;m passionate about staying up-to-date with emerging tools and projects in the tech world. Outside of coding, I have a strong interest in music and am learning bass guitar along with other instruments.
                </p>
            </article>
        </Section>
    )
}

export default About