import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useProductDetails from '../../../hooks/useProductDetails';

const Orders = () => {
    const [user] = useAuthState(auth);
    const { productId } = useParams();
    const [product] = useProductDetails(productId);
    const handleOrder = e => {
        e.preventDefault();
        const order = {
            name: user?.displayName,
            email: user.email,
            address: e.target.address.value,
            phone: e.target.phone.value
        };
        axios.post('https://glacial-sands-06183.herokuapp.com/order', order)
            .then(response => {
                const {data} = response;
                if(data.insertedId){
                    alert('Your order is booked');
                    e.target.reset();
                }
            });
    }
    return (
        <div>
            <form onSubmit={handleOrder} className="add-container">
                <h1>Add Product</h1>

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" value={user?.displayName} placeholder="Enter name..." name="name" required readOnly />

                <label htmlFor="email"><b>Email</b></label>
                <input type="email" value={user?.email} placeholder="Enter email" name="email" required readOnly/>

                <label htmlFor="address"><b>Address</b></label>
                <input type="text" placeholder="Enter address" name="address" required />

                <label htmlFor="phone"><b>Phone</b></label>
                <input type="text" placeholder="Enter phone number" name="phone" required />

                <button type="submit" className="btn">Check Out</button>
            </form>
        </div>
    );
};

export default Orders;