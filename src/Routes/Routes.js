import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog/Blog";
import Courses from "../component/Courses/Courses";
import Faq from "../component/Faq/Faq";
import Home from "../component/Home/Home";
import Terms from "../component/Terms/Terms";
import Course from "../Course/Course";
import CourseDetails from "../CourseDetails/CourseDetails";
import PdfDownload from "../CourseDetails/PdfDownload/PdfDownload";
import Main from "../Layout/Main";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://study-point-server1.vercel.app/course-details/${params.id}`),
                element: <Course></Course>
            },
            {
                path: '/course-details/:id',
                loader: ({ params }) => fetch(`https://study-point-server1.vercel.app/course/${params.id}`),
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
            },
        ]

    },
    {
        path: '*',
        element: <div>The Page not found</div>
    },
    {
        path: '/faq',
        element: <Faq></Faq>
    },
    {
        path: '/terms',
        element: <Terms></Terms>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
    {
        path : 'pdf-download',
        element : <PdfDownload></PdfDownload>
    }
])