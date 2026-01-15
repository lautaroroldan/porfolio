import Image, { StaticImageData } from 'next/image'

interface ProjectItemProps {
    title: string
    description: string
    technologies: string[]
    date: string
    backgroundImg: StaticImageData
    projectUrl: string
}

function ProjectItem({ title, description, technologies, date, backgroundImg, projectUrl }: ProjectItemProps) {
    return (
        <div className='text-custom-gray'>
            <Image unoptimized
                src={backgroundImg}
                alt={title}
                className='rounded-xl aspect-video object-cover border border-white/15 p-1'
            />
            <div className='flex justify-between my-6 sm:flex-row flex-col'>
                <p className='text-sm sm:w-3/5'>{description}</p>
                <div className='text-right pr-2'>
                    <h3 className='text-sm opacity-80'>{date}</h3>
                    <a href={projectUrl} className='text-white font-bold text-lg underline underline-offset-4' target='_blank'>{title}</a>
                </div>
            </div>
            <div className='flex flex-wrap gap-1'>
                {technologies.map((technology) => (
                    <TechnologyChip key={technology} technology={technology} />
                ))}
            </div>
        </div>
    )
}

const TechnologyChip = ({ technology }: { technology: string }) => {
    return <h3 className='px-2 py-1 rounded-md bg-white/10 text-sm text-white/80'>{technology}</h3>
}

export default ProjectItem