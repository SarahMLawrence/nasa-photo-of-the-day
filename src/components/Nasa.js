import React from "react";

function Video(props){
    return (
        <>
        {props.media_type === "video"}?
        <iframe width="420" height="315" src={props.src}></iframe>
        :
        <img src={props.hdurl} width="420"
        height="315"></img>

        
        </>
    )
}
export default Video;