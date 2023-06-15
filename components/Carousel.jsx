'use client';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faRegular } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';


export default function Carousel({ images }) {
    const [ index, setIndex ] = useState(0);
    function handleClick(e) {
        setIndex(e.currentTarget.id);
    }
    function decrementImage() {
        if (index - 1 < 0) {
            setIndex(index - 1 + 3);
        } else {
            setIndex((index - 1) % images.length);
        }
    }

    function incrementImage() {
        setIndex((index + 1) % images.length);
    }
    return (
        <div>
            <img src={images[index]} width={1279} />
            <ul className="flex flex-row mx-auto p-1 items-center justify-center">
                <li>
                    <button className="text-txt" onClick={decrementImage}>＜</button>
                </li>
                {images.map((src, index) => (
                    <li className="inline p-4" key={index + src}>
                        <button id={index} onClick={handleClick}>
                            <div className="rounded-full p-1 bg-primary"></div>
                        </button>
                    </li> 
                ))}
                <li>
                    <button className="text-txt" onClick={incrementImage}>＞</button>
                </li>
            </ul>
        </div>
    );
}