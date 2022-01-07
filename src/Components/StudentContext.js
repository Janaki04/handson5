import React, { createContext, useState } from 'react'


export const StudentContext = createContext();

export const StudentProvider = (props) => {
    const [students, setStudents] = useState([
        {
            "Name" : "John",
            "Age" : "20",
            "Course" : "HTML",
            "Batch" : "August",
            "Id"    : "1"
          },
          {
            "Name" : "Doe",
            "Age" : "21",
            "Course" : "CSS",
            "Batch" : "July",
            "Id"    : "2"
          },
          {
            "Name" : "Biden",
            "Age" : "26",
            "Course" : "JAVASCRIPT",
            "Batch" : "September",
            "Id"    : "3"
          },
          {
            "Name" : "Chirst",
            "Age" : "28",
            "Course" : "REACT",
            "Batch" : "December",
            "Id"    : "4"
          },
          {
            "Name" : "Elent",
            "Age" : "23",
            "Course" : "MERN",
            "Batch" : "October",
            "Id"    : "5"
          }
    ]);

    return(
        <StudentContext.Provider value={[students, setStudents]} >
            {props.children}
        </StudentContext.Provider>
    )
}

