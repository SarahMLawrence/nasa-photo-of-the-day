import React from "react";

const PhotoCard = props => {
  return (
    <li className="photo-card" >
      <h2>Photo Title:</h2>
      <p></p>
      <p></p>
      <p>
        Release date:{" "}
        <small className="text-warning"></small>
      </p>
    </li>
  );
};
export default PhotoCard;
