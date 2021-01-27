import React from "react";

function LocationsCard(props){
    return(
        <div className="swiper-slide locationCard">
            <div className=".image" style={{backgroundImage: "url("+props.image+")"}}></div>
            <div className="info">
                <h3 className="title mb-3">{props.title}</h3>
                <div className="address"><span className="font-weight-bold mr-1">მისამართი:</span>{props.address}</div>
                <div className="workingHours"><span className="font-weight-bold mr-1">სამუშაო საათები:</span>{props.workingHours}</div>
                <div className="phone"><span className="font-weight-bold mr-1">ტელეფონი:</span>{props.phone}</div> 
            </div>
        </div> 
    )
}

export default LocationsCard;