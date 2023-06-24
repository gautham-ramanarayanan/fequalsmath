import Link from "next/link";

export default function ClassCard({ classInformation }) {
    const buttonText = (link) => {
        if (link.length > 0) {
            return "View Syllabus";
        }
        return "Syllabus Unavailable";
    }
    const textStyle = "text-txt text-center font-medium ";
    return (
        <div className="rounded-xl whitespace-nowrap bg-primary-second flex flex-col p-8 shadow-xl min-w-fit min-h-fit block w-md space-y-3">
            <p className="text-primary text-2xl font-bold text-center">{classInformation.name}</p>
            <p className={textStyle}>Taught by {classInformation.instructor}</p>
            <p className={textStyle}>Price: {classInformation.cost}</p>
            <p className={textStyle}>Time: {classInformation.schedule}</p>
            <p className={textStyle}>Location: {classInformation.location}</p>
            <p className="text-center font-bold text-primary">Difficulty: {classInformation.difficulty}</p>
            <Link target="_blank" href={classInformation.syllabusLink} className="space-y-4 block mx-auto p-2 pt-6">
                <div className="text-txt-light inline bg-primary px-8 py-4 rounded-xl mt-2 hover:opacity-70 scroll-smooth">
                    <p className="font-bold inline">{buttonText(classInformation.syllabusLink)}</p>
                </div>
            </Link>
        </div>
    )
}