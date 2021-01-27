import React from "react";



              
function Navbar(){
    return(

            <div className="myNav container-fluid fixed-top">
                <div className="container h-100">
                    <div className="row justify-content-between h-100">
                        
                        <div className="logoSpace">
                            <div className="shadowCover"></div>
                            <div className="logo">
                                <a  href="#">
                                    <img src="./images/Logo.png"/>
                                </a>
                            </div>
                        </div>
                        <div className="navButtons col-7 d-flex align-items-center pl-5">
                            <a className="mx-3 text-dark text-decoration-none" href="#">მთავარი</a>
                            <button type="button" className="mx-3 px-4 py-2 buttonShmuton">ონლაინ მაღაზია</button>
                            <a className="mx-3 text-dark text-decoration-none" href="#">ბლოგი</a>
                            <a className="mx-3 text-dark text-decoration-none" href="#">კარიერა</a>
                            <a className="mx-3 text-dark text-decoration-none" href="#">კონტაქტი</a> 
                        </div>

                        <div className="col-2 align-items-center d-flex">
                            <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown">
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>    
                            <div className="navIcons">
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-map-marker-alt"></i>
                            </div>

                        </div>


                 </div>
            </div>
        </div>

                /* <span className="navbar-toggler-icon"></span> */
                /* <div className="dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                    </a>
                    
                </div> */

          
    );
};

export default Navbar;