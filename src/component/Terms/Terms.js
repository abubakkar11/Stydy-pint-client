import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='app'>
            <h3>Accept Terms And Condition</h3>
            <h2><Link to={'/register'}>Go to Register Page</Link> </h2>
        </div>
    );
};

export default Terms;