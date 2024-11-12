export interface ExperienceItemProps {
    position: string;
    company: string;
    description: string;
    dateStart: string;
    dateEnd: string;
}

function ExperienceItem({ position, company, description, dateStart, dateEnd }: ExperienceItemProps) {
    return (
        <>
            <div className="absolute w-3 h-3 bg-[#262626] rounded-full mt-1.5 -start-1.5 border border-custom-gray"></div>
            <time className="mb-1 text-xs font-normal leading-none text-custom-gray opacity-80">{dateStart} - {dateEnd}</time>
            <h2 className="text-lg font-semibold text-white">{position}</h2>
            <h3 className="text-sm font-semibold text-custom-gray opacity-80 mb-3.5">{company}</h3>
            <p className="mb-4 text-base font-normal text-custom-gray">{description}</p>
        </>
    )
}

export default ExperienceItem