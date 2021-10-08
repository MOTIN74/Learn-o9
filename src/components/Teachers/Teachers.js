import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers,setTeachers]=useState([]);
    useEffect(()=>{
        fetch('./teachers.json')
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    },[])

    
    return (
        <div>
            <h2>Our techers</h2>
            <Row xs={1} md={3} className="g-4">
            {
                teachers.map(teacher=><Teacher teacher={teacher}></Teacher>)
            }
            </Row>
            
        </div>
    );
};

export default Teachers;