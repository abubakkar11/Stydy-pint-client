import { createBrowserRouter } from "react-router-dom";
import Courses from "../component/Courses/Courses";
import Home from "../component/Home/Home";
import Main from "../Layout/Main";

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
                path : '/courses',
                element : <Courses></Courses>
            },
            {
                path : '/course/:id',
            }
        ]
    },
   
])