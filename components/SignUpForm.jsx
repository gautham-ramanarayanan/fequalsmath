"use client";

import { useState } from "react";
const initClasses = (currentClasses) => {
    let names = currentClasses.map(course => course.name);
    console.log(names)
    let classes = new Object();
    for (let n in names) {
        console.log(n);
        classes[names[n]] = false;
    }
    console.log(classes)
    return classes;
}

export default function SignUpForm({ currentClasses }) {
    const [inputs, setInputs] = useState({});
    const [classes, setClasses] = useState(
        {}
    );
    

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleCourseChange = (event) => {
        const name = event.target.name;
        const value = event.target.checked;
        setClasses(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        /* for (let course in currentClasses) {
            if (classes[course.name] == undefined) {
                setClasses(values => ({...values, [course.name]: false}));
            }
        } */
        alert("Form submission currently unavailable");
        /* alert(`Parent Name: ${inputs.parentName}\n
        Parent Email: ${inputs.parentEmail}\n
        Parent Phone: ${inputs.parentCell}\n
        Student Name: ${inputs.studentName}\n
        Student Email: ${inputs.studentEmail}\n
        Student School Grade: ${inputs.grade}\n
        Combo?: ${classes["Combinatorics"]}\n
        Geo?: ${classes["Geometry"]}\n
        Alg?: ${classes["Algebra"]}\n
        Number Theory?: ${classes["Number Theory"]}\n
        AMC Score: ${inputs.amc}\n
        AIME Score: ${inputs.aime}\n
        Comments: ${inputs.comments}
        `) */
    }

    const inputStyling = "p-2 m-2 border-b border-primary appearance-none focus:outline-none focus:shadow-outline"; 
    const labelStyle = "p-2 text-lg font-medium";
    const checkbox = "m-2";
    return (
        <div>
            <form onSubmit={handleSubmit} className="text-txt">
                <label className={labelStyle}>Parent Name: 
                    <br />
                    <input type="text" name="parentName" value={inputs.parentName || ""} onChange={handleChange} className={inputStyling} required/>
                </label>
                <br />
                <label className={labelStyle}>Parent Email: 
                    <br />
                    <input type="text" name="parentEmail" value={inputs.parentEmail || ""} onChange={handleChange} className={inputStyling} required/>
                </label>
                <br />
                <label className={labelStyle}>Parent Phone Number: 
                    <br />
                    <input type="text" name="parentCell" value={inputs.parentCell || ""} onChange={handleChange} className={inputStyling} required/>
                </label>
                <br />
                <label className={labelStyle}>Student Name: 
                    <br />
                    <input type="text" name="studentName" value={inputs.studentName || ""} onChange={handleChange} className={inputStyling} required/>
                </label>
                <br />
                <label className={labelStyle}>Student Email: 
                    <br />
                    <input type="text" name="studentEmail" value={inputs.studentEmail || ""} onChange={handleChange} className={inputStyling} required/>
                </label>
                <br />
                <label className={labelStyle}>Student School Grade: 
                    <br />
                    <input type="text" name="grade" value={inputs.grade || ""} onChange={handleChange} className={inputStyling} required/>
                </label>
                <br />

                <label className={labelStyle}>
                    Select the classes you would like to enroll in (Check at least one):
                </label>
                <br />
                {currentClasses.map((course) => (
                    <label className={labelStyle} key={course.name}>
                        <input type="checkbox" name={course.name} checked={classes[course.name] || false} onChange={handleCourseChange} className={checkbox} />
                        {course.name}
                    </label>
                ))}
                <br />

                <br />
                <label className={labelStyle}>What was your most recent AMC 10/12 score?: 
                    <br />
                    <input type="text" name="amc" value={inputs.amc || ""} onChange={handleChange} className={inputStyling}/>
                </label>
                <br />
                <label className={labelStyle}>If you have qualified for the AIME in a previous year, please list those scores here. 
                    <br />
                    <input type="text" name="aime" value={inputs.aime || ""} onChange={handleChange} className={inputStyling}/>
                </label>
                <br />
                <label className={labelStyle}>Additional comments: 
                    <br />
                    <textarea name="comments" value={inputs.comments} onChange={handleChange} className={`${inputStyling} w-full`}/>
                </label>
                <br />
                <input type="submit" className="mx-auto rounded-xl text-txt-light bg-primary py-2 px-6" />
            </form>
        </div>
    );
}