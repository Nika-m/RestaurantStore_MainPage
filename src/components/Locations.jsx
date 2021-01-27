import React from 'react';
import LocationsCard from './LocationsCard';
import {locations} from "./data.js";

function createLocations(locationObj){
    return(
        <LocationsCard
            key={locationObj.id}
            image={locationObj.image}
            title={locationObj.title}
            address={locationObj.address} 
            workingHours={locationObj.workingHours}
            phone={locationObj.phone}
        />
    )
}

function Locations(){
    return(
        <div style={{padding:"0px 50px", width:"100%", position:"relative"}}> {/* without this it goes crazy, but shop.tsisk works well*/}
            <div className="swiper-button-prev"></div>
            <div className="swiper-container swiper3">
                <div className="swiper-wrapper py-3">
                    {/* {props.children} */}
                    {locations.map(createLocations)}
                </div>
            </div>
            <div className="swiper-button-next"></div>
        </div>

    )
}

export default Locations;