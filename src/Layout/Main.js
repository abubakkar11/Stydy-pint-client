import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../component/LeftSideNav/LeftSideNav';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div >
        <Header></Header>
         <div>
         <Container className='mt-5'>
            <Row>
                <Col lg='3'className='d-none d-lg-block'>
                <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='9'>
                <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
         </div>
         <div className='mt-5 py-5'>
         <Footer></Footer>
         </div>
       </div>
    );
};

export default Main;