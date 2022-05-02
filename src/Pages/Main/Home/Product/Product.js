import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {_id, imgurl, name, price} = product;
    const navigate = useNavigate();
    const handleDetails = id => {
        navigate(`/productDetails/${id}`);
    }
    return (
        <div className="card">
            <img src={imgurl} alt="Denim Jeans" style={{width:"100%"}} />
                <h1>{name}</h1>
                <p className="price">${price}</p>
                <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                <p><button onClick={() => handleDetails(_id)} >Details</button></p>
        </div>
    );
};

export default Product;