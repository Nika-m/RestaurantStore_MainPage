import React from 'react';

function Footer(){
    return(
    <div className="myfooter py-5">
        <div className="container d-flex justify-content-between align-items-center flex-column flex-lg-row">
            <div><img className="py-2"src="./images/footer.png" style={{width:"100px"}} alt=""/></div>
            <div className="d-flex flex-column flex-lg-row align-items-center">
                <p className="px-2 footerInfo">+99532 200 55 55</p>
                <p className="px-2 footerInfo">თბილისი, ა. ბელიაშვილის ქუჩა 99</p>
                <p className="px-2">marketing@tsiskvili.ge</p> 
            </div>
            <div className="d-flex">
                <a className="icon mx-2 d-flex justify-content-center align-items-center text-reset" href="https://www.facebook.com/Tsiskvili">
                    <i className="fab fa-facebook-f "></i>
                </a>
                <a className="icon mx-2 d-flex justify-content-center align-items-center text-reset" href="https://www.facebook.com/Tsiskvili">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Footer;
