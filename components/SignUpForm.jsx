"use client";

import { useState } from "react";

export default function SignUpForm() {
    const [inputs, setInputs] = useState({});
    const [ combo, setCombo ] = useState(false);
    const [ geo, setGeo ] = useState(false);
    const [ alg, setAlg ] = useState(false);
    const [ placeholder, setPlaceholder ] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was:`)
    }

    const inputStyling = "p-2 m-2 border-b border-background-second w-full appearance-none focus:outline-none focus:shadow-outline"; 
    const labelStyle = "p-2 text-lg font-medium";
    const checkbox = "m-2";
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className={labelStyle}>Parent Name: 
                    <br />
                    <input type="text" name="parentName" value={inputs.parentName || ""} onChange={handleChange} className={inputStyling} />
                </label>
                <br />
                <label className={labelStyle}>Parent Email: 
                    <br />
                    <input type="text" name="parentEmail" value={inputs.parentEmail} onChange={handleChange} className={inputStyling}/>
                </label>
                <br />
                <label className={labelStyle}>Parent Phone Number: 
                    <br />
                    <input type="text" name="parentCell" value={inputs.parentCell} onChange={handleChange} className={inputStyling}/>
                </label>
                <br />
                <label className={labelStyle}>Student Name: 
                    <br />
                    <input type="text" name="studentName" value={inputs.studentName} onChange={handleChange} className={inputStyling}/>
                </label>
                <br />
                <label className={labelStyle}>Student Email: 
                    <br />
                    <input type="text" name="studentEmail" value={inputs.studentEmail} onChange={handleChange} className={inputStyling}/>
                </label>
                <br />
                <label className={labelStyle}>Student Grade: 
                    <br />
                    <input type="text" name="grade" value={inputs.grade} onChange={handleChange} className={inputStyling}/>
                </label>
                <br />

                <label className={labelStyle}>
                    Select the classes you would like to enroll in:
                </label>
                <br />
                <label className={labelStyle}>
                    <input type="checkbox" name="combo" value={combo} onChange={(e) => { setCombo(e.target.value)}} className={checkbox} />
                    Combinatorics
                </label>
                <br />
                <label className={labelStyle}>
                    <input type="checkbox" name="geo" value={geo} onChange={(e) => { setGeo(e.target.value)}} className={checkbox}/>
                    Geometry
                </label>
                <br />
                <label className={labelStyle}>
                    <input type="checkbox" name="alg" value={alg} onChange={(e) => { setAlg(e.target.value)}} className={checkbox}/>
                    Algebra
                </label>
                <br />
                <label className={labelStyle}>
                    <input type="checkbox" name="plc" value={placeholder} onChange={(e) => { setPlaceholder(e.target.value)}} className={checkbox}/>
                    Placeholder
                </label>
                <br />

                <br />
                <label className={labelStyle}>What was you/your child's most recent AMC 10/12 scores?: 
                    <br />
                    <input type="text" name="amc" value={inputs.amc} onChange={handleChange} className={inputStyling}/>
                </label>
                <br />
                <label className={labelStyle}>If you have qualified for the AIME in a previous year, please list those scores here. 
                    <br />
                    <input type="text" name="aime" value={inputs.aime} onChange={handleChange} className={inputStyling}/>
                </label>
                <br />
                <label className={labelStyle}>Additional comments: 
                    <br />
                    <textarea name="comments" value={inputs.comments} onChange={handleChange} className={inputStyling}/>
                </label>
                <br />
                <input type="submit" className={inputStyling} />
            </form>
        </div>
    );
}