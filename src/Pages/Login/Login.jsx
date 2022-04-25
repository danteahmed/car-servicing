import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from '../Shared/PageTitle/PageTitle';

const Login = () => {

   const [signInWithEmailAndPassword, user, loading, error] =
     useSignInWithEmailAndPassword(auth);
   const [sendPasswordResetEmail, sending, error1] =
     useSendPasswordResetEmail(auth);

   const emailRef = useRef('');
   const passwordRef = useRef('');
   const navigate = useNavigate();
   const location = useLocation();

   let from = location.state?.from?.pathname || "/";

   let errorMsg;
   if (error) {
     errorMsg = (
       <div>
         <p className="text-danger">
           Error: {error?.message}
         </p>
       </div>
     );
   }

   if(user){
      navigate(from, { replace: true });
   }

   const handleSignIn = event =>{
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      signInWithEmailAndPassword(email, password);

   }

   const resetPassword = async()=>{
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast("Email Sent");
    } else{
      toast("Please Enter Your Email address")
    }
   }

   const navigateReg = event =>{
      navigate('/register')
   }

   return (
     <div className="container w-50 mx-auto">
       <PageTitle title="Login"></PageTitle>
       <h2 className="text-primary text-center mt-2">Please Login</h2>
       <Form onSubmit={handleSignIn}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control
             ref={emailRef}
             type="email"
             placeholder="Enter email"
             required
           />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control
             ref={passwordRef}
             type="password"
             placeholder="Password"
             required
           />
         </Form.Group>
         {errorMsg}
         <Form.Group
           className="mb-3"
           controlId="formBasicCheckbox"
         ></Form.Group>
         <Button
           className="w-50 mx-auto d-block mb-2"
           variant="primary"
           type="submit"
         >
           Login
         </Button>
       </Form>

       <p className="text-danger">
         New to Car Servicing?{" "}
         <Link
           to="/register"
           className="text-success pe-auto text-decoration-none"
           onClick={navigateReg}
         >
           Please Register
         </Link>
       </p>
       <p className="text-danger">
         Forget Password?{" "}
         <button
           className="btn btn-link pe-auto text-decoration-none"
           onClick={resetPassword}
         >
           Reset Password
         </button>
       </p>
       <SocialLogin></SocialLogin>
       <ToastContainer position="top-center"></ToastContainer>
     </div>
   );
};

export default Login;