import { useEffect, useState } from "react";

const useProductDetails = productId => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://glacial-sands-06183.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);
    return [product];
}

export default useProductDetails;