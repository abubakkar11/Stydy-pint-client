import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Course = () => {
  const course = useLoaderData()
  console.log(course)
  const { img, title, body, } = course;
  return (
    <div>
      <CardGroup className='mb-2 md-w-75'>
        <Card>
          <Card.Img variant="top" style={{ width: '100%', height: '250px', padding: '10px' }} src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {
                body.length > 150 ?
                  <p>{body.slice(0, 100) + '...'}<Link to={`/course-details/${course._id}`}> Read more</Link></p>
                  :
                  <p>{body}</p>
              }
            </Card.Text>
            <Link to={`/course-details/${course._id}`}><Button variant="primary">Get premium access</Button></Link>
          </Card.Body>

        </Card>
      </CardGroup>
    </div>
  );
};

export default Course;