import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import './Login.css'

const Login = () => {
  const [error, setError] = useState(true);
  const { signIn, resetPassword } = useContext(AuthContext);
  const [resetEmail, setResetEmail] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const user = result.user;
        setError(false)
        form.reset()
        if (user.emailVerified === true) {
          toast.success('Login Successful')
          navigate(from, { replace: true })
        }
        else {
          toast.error('Please Verify Your Email')
        }
        console.log(user)
      })
      .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage);
        toast.error('Please Enter Valid Information')
      })
  }
  const handleOnChange = (e) => {
    const email = e.target.value;
    console.log(email)
    setResetEmail(email)
  }
  const handleForgot = () => {
   console.log(resetEmail)
   resetPassword(resetEmail)
   .then(() =>{
    toast.success('Your password sent your email')
   })
   .catch(error => {
    const errorMessage = error.message;
    setError(errorMessage);
    toast.error('Please Enter Valid email')
  })
   
  }
  return (
    <Form onSubmit={handleSubmitLogin} className='w-75 container text-white'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleOnChange} type="email" name="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required/>
      </Form.Group>
      <div><p className='text-danger'>{error}</p></div>
      <div className='mb-2 d-flex justify-content-between '>
        <div>
          I have no account ?
          <Link className='hover' to={'/register'}>Please Register </Link>
        </div>
        <Link className='me-5  text-white text-decoration-none' onClick={handleForgot}><span className='hover'>Forgot Password</span></Link>
      </div>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;