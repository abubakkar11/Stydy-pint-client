import React from 'react';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import Header from '../Header/Header';
import Image from './image/Question1-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            style={{ border: 'none' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}


const Faq = () => {
    return (
        <div >
            <Header></Header>
            <div className='d-flex container justify-content-center align-items-center mt-5 py-5'>
                <div className='w-75'>
                    <Accordion defaultActiveKey="0">
                        <Card className='mb-2 '>
                            <Card.Header>
                                <CustomToggle eventKey="0">Why you join the course ?  <FontAwesomeIcon className='ms-5' icon={faPlus} /></CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Reasons to become a freelancer include flexibility, choosing what you work on and the clients you work with, and earning potential.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='mb-2'>
                            <Card.Header>
                                <CustomToggle eventKey="1">What will you learn from the course ?<FontAwesomeIcon className='ms-5' icon={faPlus} /></CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>You can learn about HTML , CSS , JAVASCRIPT , REACT , PYTHON , PHP , TYPE SCRIPT.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='mb-2'>
                            <Card.Header>
                                <CustomToggle eventKey="2">What benefits will you get from this course ?<FontAwesomeIcon className='ms-5' icon={faPlus} /></CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>From the course you will get 24 hours support session and you will be taught the complete work. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='mb-2'>
                            <Card.Header>
                                <CustomToggle eventKey="3">How much time do you have to give for admission ?<FontAwesomeIcon className='ms-5' icon={faPlus} /></CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>You need to devote at least six to eight hours a day.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='mb-2'>
                            <Card.Header>
                                <CustomToggle eventKey="4">How many days in a week will this cell be closes ?<FontAwesomeIcon className='ms-5' icon={faPlus} /></CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>There will be no closure during this week but there will be practice days.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className='mb-2'>
                            <Card.Header>
                                <CustomToggle eventKey="5">How many months can this course be ?<FontAwesomeIcon className='ms-5' icon={faPlus} /></CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>The course may be five to six months.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <div>
                    <img className=' ms-5 d-none d-md-block' src={Image} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Faq;