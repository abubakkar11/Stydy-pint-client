import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { AiOutlineGooglePlus , AiOutlineGithub } from "react-icons/ai";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Register = () => {
    const [error , setError] = useState();
    const {createUser , createUserWithGoogle} = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider()
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name , photoURL , email , password);

        createUser(email , password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage);
        })
    }
    const handleGoogleSingUp = () =>{
        createUserWithGoogle(provider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    const handleGithubSingUp = () =>{
        createUserWithGoogle(provider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    return (
        <Form onSubmit={handleSubmit} className='w-75 container' >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name ="name" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name ="photoURL" placeholder="Enter Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name ="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Button onClick={handleGoogleSingUp} className='w-50' variant="outline-primary"><AiOutlineGooglePlus className='fs-4 '></AiOutlineGooglePlus>  Sigh up with Google</Button>
        <Button onClick={handleGithubSingUp} className='w-50 ' variant="outline-secondary"><AiOutlineGithub className='fs-4 '></AiOutlineGithub> Sigh up with Github</Button>
        <div><p className='text-danger'>{error}</p></div>
        <div className='mb-2'>Already have a account? <Link to={'/login'}>Login</Link></div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    );
};

export default Register;