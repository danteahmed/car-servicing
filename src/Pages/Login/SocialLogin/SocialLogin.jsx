import React from 'react';
import google from '../../../images/social/google2.png'
import fb from '../../../images/social/fb.png'
import git from '../../../images/social/github.png'


const SocialLogin = () => {
   return (
     <div>
       <div className="d-flex align-items-center">
         <div style={{ height: "1px" }} className="bg-primary w-50"></div>
         <p className="mt-3 px-2 fw-bold fst-italic">or</p>
         <div style={{ height: "1px" }} className="bg-primary w-50"></div>
       </div>
       <div>
         <button className="btn btn-primary border w-50 my-2">
           <img
             className="mx-2"
             style={{ width: "30px" }}
             src={google}
             alt=""
           />
           Google Sign In
         </button>
         <button className="btn btn-primary border w-50 my-2">
           <img
             className="mx-2"
             style={{ width: "30px" }}
             src={fb}
             alt=""
           />
           Facebook Sign In
         </button>
         <button className="btn btn-primary border w-50 my-2">
           <img
             className="mx-2"
             style={{ width: "30px" }}
             src={git}
             alt=""
           />
           Github Sign In
         </button>
       </div>
     </div>
   );
};

export default SocialLogin;