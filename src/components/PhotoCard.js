import React from "react";


const PhotoCard = props => {
    return (
        <li className="photo-card" key={props.date} >
           
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <p>{props.explanation}</p>
 
        </li>
    );
};
export default PhotoCard;
