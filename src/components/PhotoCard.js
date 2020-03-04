import React from "react";
//import Video from "../components/Nasa";



const PhotoCard = props => {
    return (
        <li className="photo-card" key={props.date} >

            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <p>{props.explanation}</p>
            <img className="photoDay"

                alt="photo day"

                className="post-thumb"

                src={props.hdurl}

            />


        </li>
    );
};
export default PhotoCard;

