import React from "react";

function ContainerCard(props){
    return (
        <div className="my-5 py-5" style={{backgroundColor:props.color}}>
                <div className="container">
                    <h1 className="mb-5 text-center">{props.containerTitle}</h1>
                    {/* <div className="d-flex flex-wrap justify-content-around"> */}
                    <div className={"row "+props.row}>
                        {props.children}
                        {/* I need button right here */}
                    </div>
                </div>  
        </div>

    );

}

export default ContainerCard;