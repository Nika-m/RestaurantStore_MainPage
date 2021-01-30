import React from "react";

function Banner(){
    return(
        <div className="swiper-container swiper1">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 text-light" style={{background:"rgba(0,0,0,.3)"}}>
                  <h1>წისქვილის ონლაინ მაღაზია</h1>
                  <p>ნამდვილი ქართული</p>
                  <div className="myBtn my-3 mx-3 p-3">შეკვეთა</div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 text-light" style={{background:"rgba(0,0,0,.3)"}}>
                  <h1>წისქვილის ონლაინ მაღაზია</h1>
                  <p>ნამდვილი ქართული</p>
                  <div className="myBtn my-3 mx-3 p-3">შექკვეთა</div>
              </div>
            </div>
        </div>
      </div>
    )
}



export default Banner;