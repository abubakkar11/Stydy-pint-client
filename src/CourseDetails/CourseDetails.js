import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course)
    return (
        <div>
           {course.title}
        </div>
    );
};

export default CourseDetails;