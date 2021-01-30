import React from 'react';

function createCategories(props, index) {
    return(
        <div className="swiper-slide my-3 mx-3 p-3" key={index}>{props}</div>
    )
}

function Suggestions(props){
    return(
        
        <div className="swiper-container swiper2">
            <div class="swiper-button-next"></div>
            <div className="swiper-wrapper">
                {props.categories.map(createCategories)} 
            </div>
            <div class="swiper-button-prev"></div>
        </div>
    )
}


export default Suggestions;