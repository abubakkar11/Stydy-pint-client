import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { AiFillEye } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

const CourseDetails = () => {
    const course = useLoaderData();
    const { img, title, body, price, total_view, rating } = course
    console.log(course)
    return (
        <div className='w-75 mb-2 container'>
            <CardGroup className='mb-2 '>
                <Card>
                    <Card.Img variant="top" style={{ width: '100%', height: '250px', padding: '10px' }} src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {
                                <p>{body}</p>
                            }
                        </Card.Text>

                    </Card.Body>
                    <div className='d-flex justify-content-between container align-items-center'>
                        <h3>${price}</h3>
                        <h4 className='d-flex justify-content-center align-items-center'><AiFillEye></AiFillEye>{total_view}</h4>
                        <h4>{rating.number}</h4>
                        <Button className='mb-2' variant="primary">Download</Button>
                    </div>
                </Card>
            </CardGroup>
        </div>
    );
};

export default CourseDetails;