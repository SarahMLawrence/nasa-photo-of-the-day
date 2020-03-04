import React, {useState, useEffect}from "react";
import axios from "axios";

import PhotoCard from "./PhotoCard";
import Video from "../components/Nasa";

function PhotoList() {
 
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=Vd3unX98yBCRnTsj2yVB3GFBjBBK2kTF6uyRFcGo`)
      .then(response => {
     
       setPhoto(response.data);
      })
      
    },[]);

    useEffect(() => {
        console.log("Photo has changed", photo);
      },[photo]);


    return (
        <div>
          <PhotoCard 
         title={photo.title}
         date={photo.date}
         explanation={photo.explanation}

          />
          <Video
          src={photo.url}
          media_type={photo.media_type}
          hdurl={photo.hdurl}
          />
        </div>
        
    );

    
 
  
}

export default PhotoList;
