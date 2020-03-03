import React, { useState, useEffect } from "react";
import axios from "axios";

//import MovieCard from "./MovieCard";

function NasaPhoto() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod").then(response => {
      setPhoto(response.data);
    });
  }, []);

  useEffect(() => {
    console.log("Photo has changed", photo);
  }, []);
  // Call an API and get data about movies
  // for each movie we want to create a new component to display that data
  
}

export default NasaPhoto;
