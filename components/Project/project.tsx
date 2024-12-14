import ProjectItem from '@/components/Project/project-item'
import balanticco from '@/assets/images/balanticco.webp'
import { inter } from '@/app/fonts/fonts'
import Section from '@/components/section'
import handballScore from '@/assets/images/handball-score.webp'
const projects = [
    {
        title: 'Balanticco',
        description: 'It’s a web application that helps you manage personal finances. You can record income and expenses, as well as visualize monthly balances through graphical representations. (Currently only mobile design, but in the future it will be responsive)',
        technologies: ['Next.js', 'Drizzle', 'SQLite', 'TailwindCSS', 'Shadcn', 'TypeScript', 'Turso'],
        date: '2024',
        backgroundImg: balanticco,
        projectUrl: 'https://balanticco.vercel.app/login'
    },
    {
        title: 'Handball Score',
        description: 'It’s a web application that enables you to track a handball tournament by creating and editing matches, updating game statuses, recording goals, cards, and more. It also includes a point system specifically designed for a handball league.',
        technologies: ['React.js', 'TailwindCSS', 'NextUI', 'TypeScript',],
        date: '2023 - 2024',
        backgroundImg: handballScore,
        projectUrl: 'https://www.handballscore.com/'
    }
]

function Project() {
    return (
        <Section>
            <h2 className={`text-xl font-bold text-white ${inter.className}`}>Projects</h2>
            <div className='flex flex-col gap-8'>
                {projects.map((project) => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </div>
        </Section>
    )
}

export default Project