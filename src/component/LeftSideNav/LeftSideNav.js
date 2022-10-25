import { useEffect, useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const LeftSideNav = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div className="d-block sticky-md-top ">
            {
                catagories.map(catagorie => <p className=""
                    key={catagorie.id}>
                    <Button variant="outline-warning w-75 sticky-top"> 
                    <Link  className="text-decoration-none text-black fw-bold" to={`/course/${catagorie.id}`}>{catagorie.name}</Link>
                    </Button>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;