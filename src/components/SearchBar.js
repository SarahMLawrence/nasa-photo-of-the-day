// You do not need to change any code in this file

import React from "react";

//import "./SearchBar.css";



const SearchBar = ({ setSearchTerms, searchPost }) => {



  return (

    <div className="search-bar-wrapper">

      <div className="image-wrapper">



      </div>

      <form className="search-form">

        <i className="fas fa-search" />

        <input

          type="text"

          placeholder="Search"



        />

      </form>

    

    </div>

  );

};



export default SearchBar;