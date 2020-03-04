import React from "react";
//import Video from "../components/Nasa";



const PhotoCard = props => {
    return (
        <li className="photo-card" key={props.date} >
            <img
                alt="photo day"
                className="post-thumb"
                src={props.hdurl}

            />

            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <p className="exp">{props.explanation}</p>



        </li>
    );
};
export default PhotoCard;

