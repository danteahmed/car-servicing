import React from 'react';
import './Footer.css'

const Footer = () => {
   return (
     <footer className='footer mt-5'>
       <p>
         <small>
           copyright @ {new Date().getFullYear()} all rights reserved{" "}
         </small>
       </p>
     </footer>
   );
};

export default Footer;