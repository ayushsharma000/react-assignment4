import React from "react";
import './student.css'
function Student(){
    return(
        <>
        <h1>Student's Record</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Roll no</th>
                <th>Course</th>
            </tr>
            <tr>
                <td>PITAMBAR BHADRA</td>
                <td>001</td>
                <td>Full Stack Developer</td>
            </tr>
            <tr>
                <td>PUSHPENDRA SINGH</td>
                <td>002</td>
                <td>Full Stack Developer</td>
            </tr>
            <tr>
                <td>ATUL KUMAR PANDEY</td>
                <td>003</td>
                <td>Full Stack Developer</td>
            </tr>
            <tr>
                <td>VIVEK KUMAR</td>
                <td>004</td>
                <td>Full Stack Developer</td>
            </tr>
        </table>
        </>
    );
}
export default Student;