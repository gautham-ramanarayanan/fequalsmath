export default function InstructorCard({ instructor, index }) {
    const img = (
        <div className="basis-1/3 p-4 w-full flex flex-col items-center">
            <img src={instructor.img} className="rounded-full max-w-xs w-full" />
        </div>
    );
    const desc = (
        <div className="basis-2/3 flex flex-col">
            <p className="sm:px-4 py-1 text-lg text-txt font-bold">{instructor.name}</p>
            <p className="sm:px-4 py-1 text-md text-txt font-medium">
                {instructor.description}
            </p>
        </div>
    );
    if (index % 2 === 0) {
        return (
            <div className="flex flex-col sm:flex-row items-center">
                {img}
                {desc}
            </div>
        )
    } else {
        return (
            <div className="flex flex-col sm:flex-row-reverse items-center">
                {img}
                {desc}
            </div>
        )
    }
}