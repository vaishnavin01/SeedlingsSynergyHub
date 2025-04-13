import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import MetaData from "../layout/MetaData";
import "./Search.css";

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate(); // Use useNavigate hook to get navigation function

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`); // Use navigate function instead of history.push
        } else {
            navigate(`/products/${keyword}`); // Use navigate function instead of history.push
        }
    };

    return (
        <Fragment>
            <MetaData title="Search A Product -- ECOMMERCE" />
            <form className="searchBox" onSubmit={searchSubmitHandler}>
                <input
                    type="text"
                    placeholder="Search a Product ..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <input type="submit" value="Search" />
            </form>
        </Fragment>
    );
};

export default Search;
