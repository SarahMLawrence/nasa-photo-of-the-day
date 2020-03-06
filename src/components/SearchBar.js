import React from "react";

import logo from "../assets/logo.png";

const SearchBar = () => {
   
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">

        <nav class="navbar navbar-light bg-light">
          <img className="logo" src={logo} alt="photo of the day" />
          <span class="navbar-brand mb-0 h1" style={{fontFamily: 'Comic Sans', fontSize:'60px', color: 'purple'}}>Nasa Photo Of The Day</span>
        </nav>

      </div>
    
      </div>
    );
  };
  
  export default SearchBar;