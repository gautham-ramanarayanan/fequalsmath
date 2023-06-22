import ClassCard from "./ClassCard";

export default function Courses({ classes }) {
    return (
        <div className="flex flex-row mx-auto items-center justify-left xl:justify-center space-x-8 p-4 pb-8 w-full overflow-x-scroll ">
            {classes.map((course) => ( <ClassCard key={course.name} classInformation={course} /> ))}
        </div>
    );
}