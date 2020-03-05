import React from "react";

const VideoCard = props => {
    return (
        
        <div class="card" style={{width: '40rem', border: 'solid', alignContent: 'center'}} >
        <img
            style={{marginLeft: '40px', padding: '10px'}}
            class="card-img-top"
            alt="photo day"
            className="post-thumb"
            src={props.hdurl}

        />
        <div class="card-body">
            <h1>{props.title}</h1>
            <h3>{props.date}</h3>
            <p class="card-text">{props.explanation}</p>

        </div>

    </div>
       
    );
};
export default VideoCard;

