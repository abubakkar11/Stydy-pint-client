import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  console.log(course)
  const { img, title, body } = course
  return (
    <div className='w-75 mb-2 '>
      <CardGroup className='mb-2 '>
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
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default CourseCard;