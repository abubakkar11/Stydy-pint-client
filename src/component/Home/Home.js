import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseCard from '../CouseCard/CourseCard';
import './Home.css'

const Home = () => {
    const [courses , setCourses] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/All-courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='display-card'>
           {
            courses.map(course => <CourseCard
            key={course._id}
            course ={course}
            ></CourseCard>)
           }
        </div>
    );
};

export default Home;