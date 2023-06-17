'use client';
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import InstructorCard from "./InstructorCard";
import SlideButtons from "./SlideButtons";

export default function Instructors({ instructors }) {
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
    const [ page, setPage ] = useState(0);
    const [ pageSmall, setPageSmall ] = useState(0);

    if (isMobile) {
        return (
            <div className="flex flex-col max-w-6xl items-center justify-between min-h-full py-2">
                <InstructorCard instructor={instructors[pageSmall]} index={0}/>
                <SlideButtons index={pageSmall} setIndex={setPageSmall} number={instructors.length} />
            </div>
        );
    } else {
        return (
            <div className="flex flex-col max-w-6xl items-center justify-between min-h-full py-2">
                <ul>
                    {instructors.slice(0+3*page, 3+3*page).map((instructor, index) => (
                        <li key={instructor.name} className="flex max-w-6xl items-center justify-between min-h-full py-2">
                            <InstructorCard instructor={instructor} index={index} />
                        </li>
                    ))}
                </ul>
                <SlideButtons index={page} setIndex={setPage} number={Math.ceil(instructors.length / 3)} />
            </div>
        )
    }
}