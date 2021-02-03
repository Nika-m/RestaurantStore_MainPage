import React from "react";


function ProductCard(props){
    return(
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="productCard">  {/*aq bootstrap is classebi unda vetonot*/}
                <div className=".image" style={{backgroundImage: "url("+props.image+")"}}></div>
                {/* <img src={props.image} alt=""/> */}
                <div className="info">
                    <p className="title">{props.title} ({props.amount} ცალი)</p>
                    <p className="description">{props.description}</p>
                    <div className="d-flex pt-3 mt-3" style={{"borderTop":"1px solid #b6b6b6"}}>
                        <p className="price mr-auto">{props.price} GEL</p>
                        <div className="plusButton d-flex justify-content-center align-items-center">
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProductCard;