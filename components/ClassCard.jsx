import Link from "next/link";

export default function ClassCard({ classInformation }) {
    const textStyle = "text-txt text-center font-medium";
    return (
        <div className="rounded-xl bg-primary-second flex flex-col p-8 shadow-xl min-w-fit min-h-fit block w-md space-y-3">
            <p className="text-primary text-2xl font-bold text-center">{classInformation.name}</p>
            <p className={textStyle}>Taught by {classInformation.instructor}</p>
            <p className={textStyle}>Price: {classInformation.cost}</p>
            <p className={textStyle}>Time: {classInformation.schedule}</p>
            {classInformation.registrationOpen && 
            <Link href="#Enroll" className="space-y-4 block mx-auto p-2 pt-6">
                <div className="text-txt-light inline bg-primary px-8 py-4 rounded-xl mt-2 hover:opacity-70 scroll-smooth">
                    <p className="font-bold inline">Enroll Now!</p>
                </div>
            </Link>
            }
        </div>
    )
}