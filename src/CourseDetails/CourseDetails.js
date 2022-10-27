import React, { useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { AiFillEye } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useReactToPrint } from 'react-to-print';

const CourseDetails = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const course = useLoaderData();
    const { img, title, body, price, total_view, rating , others_info} = course;
    console.log(course)
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className='w-75 mb-2 container'>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div class="print__section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div ref={componentRef} className="card">
                                        <div class="float__start">
                                            <h3 class="card-title text-center p-2 mb-0">Course Information</h3>
                                        </div>
                                        <hr />
                                        <div class="float__infoss">
                                            <ul>
                                                <li className='fs-5'> Name :  {title}  </li>
                                                <li className='fs-5'> Course Price : $ {price}  </li>
                                                <li className='fs-5'> Course Info :  {body}  </li>
                                                <li className='fs-5'> Total view :  {total_view}  </li>
                                                <li className='fs-5'> Rating :  {rating.number} </li>
                                                <li className='fs-5'> Badge:   {rating.badge} </li>
                                                <li className='fs-5'> Is Trending : True  </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handlePrint} className="print__button" variant="primary">Download</Button>
                </Modal.Footer>
            </Modal>
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
                        <Link ><Button onClick={handleShow} className='mb-2' variant="primary">Download</Button></Link>
                    </div>
                </Card>
            </CardGroup>
        </div>
    );
};

export default CourseDetails;