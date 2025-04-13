import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";

const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title="ECOMMERCE" />

                    <div className="banner">
                        <div className="iconlist">
                            {/* Use Link components to navigate */}
                            <Link to="/login" className="nav-icon"><AiOutlineUser className="userIcon" /></Link>
                            <Link to="/search" className="nav-icon"><AiOutlineSearch className="searchIcon" /></Link>
                            <Link to="/cart" className="nav-icon"><AiOutlineShoppingCart className="cartIcon" /></Link>
                        </div>
                        <p>Welcome to SeedlingsSynergyHub</p>
                        <h1>FIND AMAZING PRODUCTS Here</h1>

                        <a href="#container">
                            <button>
                                Scroll <CgMouse />
                            </button>
                        </a>
                    </div>

                    <h2 className="homeHeading">Featured Products</h2>

                    <div className="container" id="container">
                        {products &&
                            products.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Home;
