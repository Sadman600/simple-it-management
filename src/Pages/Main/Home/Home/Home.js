import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://glacial-sands-06183.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data.result);
            });
    }, []);
    const handleAddProduct = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const imgurl = e.target.imgurl.value;
        const product = { name, price, description, imgurl };

        fetch('https://glacial-sands-06183.herokuapp.com/product', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    return (
        <div>
            <div>
                <form onSubmit={handleAddProduct} className="add-container">
                    <h1>Add Product</h1>

                    <label htmlFor="name"><b>Name</b></label>
                    <input type="text" placeholder="Enter name..." name="name" required />

                    <label htmlFor="price"><b>Price</b></label>
                    <input type="text" placeholder="Enter price" name="price" required />

                    <label htmlFor="description"><b>Description</b></label>
                    <input type="text" placeholder="Enter description" name="description" required />

                    <label htmlFor="imgurl"><b>Img</b></label>
                    <input type="text" placeholder="Enter img url" name="imgurl" required />

                    <button type="submit" className="btn">Add</button>
                </form>
            </div>
            <h1>Our Product</h1>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;