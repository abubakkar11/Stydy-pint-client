import React from 'react';
import { Accordion } from 'react-bootstrap';
import Header from '../Header/Header';
import './Blog.css'

const Blog = () => {
    return (
        <div className='according'>
            <Header></Header>
            <div className='container mt-5 py-5 w-50'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is cors?</Accordion.Header>
                        <Accordion.Body>
                            Cross-origin resource sharing is a mechanism that allows
                            restricted resources on a web page to be requested from
                            another domain outside the domain from which the first
                            resource was served.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                            Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                            Yes the other option is Facebook , Microsoft , Phone number , Twitter , Anonymous , Apple etc.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How does the private route work?</Accordion.Header>
                        <Accordion.Body>
                            The private route component is used to protect selected pages in a React app from unauthenticated users.
                            If a not been authenticate  then he is not allowed to enter.f the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                        <Accordion.Body>
                            A node is a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes. Links between nodes are often implemented by pointers.
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;