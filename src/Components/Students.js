import React from "react";
import './style.css'
import { Table } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { StudentContext } from './StudentContext';
import { useContext } from 'react';

const Students = () => {
    const [students] = useContext(StudentContext);

    return(
        <div>
            <div className='box2'>
                <div><h1 className='student'>Students Details</h1></div>
                <div><NavLink to="/add-student" className='addclick'>Add Student</NavLink></div>
            </div>
            <div className='box1'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Course</TableCell>
                            <TableCell align="right">Batch</TableCell>
                            <TableCell align="right">Change</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {students.map((student) => (
                            <TableRow
                            key={student.Id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {student.Name}
                            </TableCell>
                            <TableCell align="right">{student.Age}</TableCell>
                            <TableCell align="right">{student.Course}</TableCell>
                            <TableCell align="right">{student.Batch}</TableCell>
                            <TableCell align="right"><NavLink to={`/edit-student/${student.Id}`}>Edit</NavLink></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Students;