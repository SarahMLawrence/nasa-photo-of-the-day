import React from "react";


const VideoCard = props => {



    return (
        <div class="card" style={{width: '60rem', marginTop: '5rem', marginLeft: '30rem', padding: '1.5rem'}} >
        {props.media_type === "video"} 
        <iframe width="500" height="315" src={props.src} style={{marginLeft: '15rem', padding: '20px'}}></iframe>
        <div class="card-body">
            <h1>{props.title}</h1>
            <h3>{props.date}</h3>
            <p class="card-text">{props.explanation}</p>

        </div>
        
        </div>

    );
};
export default VideoCard;

