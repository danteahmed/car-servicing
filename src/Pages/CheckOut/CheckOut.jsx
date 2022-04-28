import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
   const {serviceId} = useParams();
   const [service] = useServiceDetail(serviceId);
   const [user, loading, error] = useAuthState(auth);
   // console.log(user);
   
   const handlePlaceOrder = event =>{
      event.preventDefault();
      const order = {
         email: user.email,
         service: service.name,
         serviceId: serviceId,
         address: event.target.address.value,
         phone: event.target.phone.value
      }
      // console.log(order);
      axios.post("http://localhost:5000/order", order).then((res) => {
        const {data} = res;
        if(data.insertedId){
           toast('Your Order Is Booked');
           event.target.reset();
        }
      });
   }
   return (
      <div className='w-50 mx-auto'>
         <h2>Place Order For: {service.name}</h2>
         <form onSubmit={handlePlaceOrder}>
            <input className='w-100 mb-2' type="text" name="name" id="" value={user?.displayName} placeholder='Name' disabled readOnly required />
            <br />
            <input className='w-100 mb-2' type="email" name="email" id="" value={user?.email} placeholder='Email' disabled readOnly required />
            <br />
            <input className='w-100 mb-2' type="text" name="service" value={service.name} id="" placeholder='Service' disabled readOnly required />
            <br />
            <input className='w-100 mb-2' type="textarea" name="address" id="" placeholder='Address' required />
            <br />
            <input className='w-100 mb-2' type="text" name="phone" id="" placeholder='Phone Number' required />
            <br />
            <input className='btn btn-primary mx-auto w-100' type="submit" value="Place Order" />
         </form>
      </div>
   );
};

export default CheckOut;