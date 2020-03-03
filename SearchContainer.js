import React from "react";

import logo from ""
//<i className="fas fa-space-shuttle"/>

const SearchBar = () => {

    return (
        <div className="search-bar">
            <div className="imageWrapper">
                <img className="logo" src={logo} alt="nasa logo" />
                
            </div>
            <form className="searchForm">
                <i className="fas fa-search" />
                <input 
                type="text"
                placeholder="Search"
                />
            </form>
        </div>
    )
}

export default SearchBar;