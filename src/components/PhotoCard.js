import React from "react";
//import Video from "../components/Nasa";



const PhotoCard = props => {
    return (
        
        <div class="card" style={{width: '60rem', alignContent: 'center', padding: '1.5rem'}} >
        <img
            style={{marginLeft: '15rem', padding: '20px'}}
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
export default PhotoCard;

