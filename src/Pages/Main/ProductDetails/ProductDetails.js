import { useNavigate, useParams } from 'react-router-dom';
import useProductDetails from '../../../hooks/useProductDetails';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product] = useProductDetails(productId);
    const { imgurl, name, price, description } = product;
    const navigate = useNavigate();
    const handleOrders = productId => {
        navigate(`/orders/${productId}`);
    }
    return (
        <div className="card">
            <img src={imgurl} alt="Denim Jeans" style={{ width: "100%" }} />
            <h1>{name}</h1>
            <p className="price">$ {price}</p>
            <p>{description}</p>
            <p><button onClick={() => handleOrders(productId)} >Order now</button></p>
        </div>
    );
};

export default ProductDetails;