import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Order.css';

const Order = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        const getOrder = async () => {
            const email = user?.email;
            const url = `https://glacial-sands-06183.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrder(data);
            } catch (error) {
                console.log(error);
            }
        }
        getOrder();
    }, [user]);
    return (
        <div>
            <h1>Order {order.length}</h1>
        </div>
    );
};

export default Order;