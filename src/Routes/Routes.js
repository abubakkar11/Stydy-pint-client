import { createBrowserRouter } from "react-router-dom";
import Courses from "../component/Courses/Courses";
import Home from "../component/Home/Home";
import Course from "../Course/Course";
import CourseDetails from "../CourseDetails/CourseDetails";
import Main from "../Layout/Main";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
            },
            {
                path : '/home',
                element : <Home></Home>,
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },

            {
                path : '/courses',
                element : <Courses></Courses>
            },
            {
                path : '/course/:id',
                loader : ({params}) => fetch(`http://localhost:5000/course-details/${params.id}`),
                element : <Course></Course>
            },
            {
                path : '/course-details/:id',
                loader : ({params}) => fetch(`http://localhost:5000/course/${params.id}`),
                element : <CourseDetails></CourseDetails>
            }
        ]
        
    },
   {
    path : '*',
    element : <div>The Page not found</div>
   }
])