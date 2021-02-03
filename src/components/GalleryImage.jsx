import React from "react";

function GalleryImage(props){
    return(
        <img className="galleryImage p-1" src={props.path}/> 
    )
}

export default GalleryImage;