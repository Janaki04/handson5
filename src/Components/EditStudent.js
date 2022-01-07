import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { StudentContext } from "./StudentContext";


import './style.css'


const EditStudent = () => {
    const { studentId } = useParams();

    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Course, setCourse] = useState("");
    const [Batch, setBatch] = useState("");

    const [students, setStudents] = useContext(StudentContext);

    useEffect(  () => {
        students.forEach(   (student) => {
            if(student.Id === studentId) {
                setName(student.Name);
                setAge(student.Age);
                setCourse(student.Course);
                setBatch(student.Batch);
            }
        } );
    }, [studentId, students])

    const handleChange1 = (event) => {
        setName(event.target.value);
         
    }
    const handleChange2 = (event) => {
        setAge(event.target.value);
    }

    const handleChange3 = (event) => {
        setCourse(event.target.value);    
    }

    const handleChange4 = (event) => {
        setBatch(event.target.value);
    }
    const handleAddClick = () => {
        setStudents(    (prevState) => prevState.map( (student) => student.Id === studentId? 
        {
            Id: studentId,
            Name: Name,
            Age: Age,
            Course: Course,
            Batch: Batch
        } 
        : student)
        );
    }

    return(
        <div className='block'>
            <div className='block1'>
                <div>
                <label className="name" >Name:</label>
                <input className="name1" id="name" type={'text'} name="name" value={Name} onChange={handleChange1}/> 
                </div>
                <div>
                <label className="age" >Age:</label>
                <input className="age1" id="Age" type={'number'} name="name" value={Age} onChange={handleChange2}/> 
                </div>
                <div>
                <label className="course" >Course:</label>
                <input className="course1" id="Course" type={'text'} name="Course" value={Course} onChange={handleChange3}/> 
                </div>
                <div>
                <label className="batch" >Batch:</label>
                <input className="batch1" id="Batch" type={'text'} name="Batch" value={Batch} onChange={handleChange4}/> 
                </div>
                <div>
                    <NavLink to="/students" className='cancel'>Cancel</NavLink>
                    <NavLink to="/students" onClick={handleAddClick} className='click'>Update</NavLink>
                </div>
            </div>
        </div>
    )

}

export default EditStudent;

