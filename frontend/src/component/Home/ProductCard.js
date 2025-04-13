import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
    if (!product || !product.images || product.images.length === 0) {
        // Handle case where product or product images are undefined or empty
        return null; // or display a placeholder image or message
    }
    const options = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };
    return (
        <Link className="productCard" to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <Rating {...options} />{" "}
                <span className="productCardSpan">
                    {" "}
                    ({product.numOfReviews} Reviews)
                </span>
            </div>
            <span>{`₹${product.price}`}</span>
        </Link>
    );
};

export default ProductCard;