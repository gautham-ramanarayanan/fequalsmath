'use client';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faRegular } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import SlideButtons from "./SlideButtons";


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
            <SlideButtons index={index} setIndex={setIndex} number={images.length} />
        </div>
    );
}