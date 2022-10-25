import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Login = () => {
    const [error , setError] = useState();
    const {signIn} = useContext(AuthContext);
    const handleSubmitLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email , password);

        signIn(email , password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage);
        })
    }
    return (
        <Form onSubmit={handleSubmitLogin} className='w-75 container'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name ="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <div><p className='text-danger'>{error}</p></div>
      <div className='mb-2'>I have no account <Link to={'/register'}>Please Register</Link></div>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    );
};

export default Login;