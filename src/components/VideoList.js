import React, {useState, useEffect}from "react";
import axios from "axios";

import VideoCard from "./VideoCard";

function VideoList() {
 
    const [video, setVideo] = useState([]);

    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=Vd3unX98yBCRnTsj2yVB3GFBjBBK2kTF6uyRFcGo&date=2020-03-03`)
      .then(response => {
     
       setVideo(response.data);
      })
      
    },[]);

    useEffect(() => {
        console.log("Photo has changed", video);
      },[video]);


    return (
        <div>
          <VideoCard
          date={video.date}
          explanation={video.explanation}
          title={video.title}
          src={video.url} 
          media_type={video.media_type}
          hdurl={video.media_type}
        
          />
        
        </div>
        
    );

    
    
  
  
}

export default VideoList;