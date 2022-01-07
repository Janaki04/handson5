import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { StudentContext } from "./StudentContext"
import './style.css'



const AddStudent = () => {
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Course, setCourse] = useState("");
    const [Batch, setBatch] = useState("");

    const [students, setStudents] = useContext(StudentContext);

    const handleChange = (event) => {
        setName(event.target.value);
        setAge(event.target.value);
        setCourse(event.target.value) ; 
        setBatch(event.target.value);
    }

    const handleAddClick = () => {
        setStudents(    [...students, {  Name: Name, Age: Age, Course: Course, Batch: Batch, Id: new Date().getTime().toString()  }]  )
    }

        return(
        <div className='block'>
            <div className='block1'>
            <div>
                <label>Name:</label>
                <input id="name" type={'text'} name="name" value={Name} onChange={handleChange}/> 
                </div>
                <div>
                <label>Age:</label>
                <input id="Age" type={'number'} name="name" value={Age} onChange={handleChange}/> 
                </div>
                <div>
                <label>Course:</label>
                <input id="Course" type={'text'} name="Course" value={Course} onChange={handleChange}/> 
                </div>
                <div>
                <label>Batch:</label>
                <input id="Batch" type={'text'} name="Batch" value={Batch} onChange={handleChange}/> 
                </div>
                <div>
                    <NavLink to="/students" className='cancel'>Cancel</NavLink>
                    <NavLink to="/students" onClick={handleAddClick} className='click'>Submit</NavLink>
                </div>
            </div>
         </div>
    )
}

export default AddStudent;