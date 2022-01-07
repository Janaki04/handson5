import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { StudentContext } from "./StudentContext";
import  TextField  from '@mui/material/TextField';
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

    const handleChange = (event) => {
        setName(event.target.value);
        setAge(event.target.value);
        setCourse(event.target.value);
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
                    <TextField required type="text" name="Name" id="outlined-helperText" label="Name" value={Name} onChange={handleChange}/>
                </div>
                <div>
                    <TextField required type="number" name="Age" id="outlined-helperText" label="Age" value={Age} onChange={handleChange}/>
                </div>
                <div>
                    <TextField required type="text" name="Course" id="outlined-helperText" label="Course" value={Course} onChange={handleChange}/>
                </div>
                <div>
                    <TextField required type="text" name="Batch" id="outlined-helperText" label="Batch" value={Batch} onChange={handleChange}/>
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

