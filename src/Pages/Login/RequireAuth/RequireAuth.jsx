import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
   const [user, loading] = useAuthState(auth);
   const location = useLocation();
   
   if(loading){
     return <Loading></Loading>
   }

   if (!user) {
     return <Navigate to="/login" state={{ from: location }} replace />;
   }

   if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
     return (
       <div className="text-center">
         <h2 className="text-danger">Email not verified</h2>
         <h4 className="text-success">Verify your Email address</h4>
         <button className="btn btn-primary">Send Verification Email</button>
       </div>
     );
   }
   

   return children;
};

export default RequireAuth;