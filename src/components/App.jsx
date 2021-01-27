import React, {useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import Navbar from "./Navbar.jsx";
import ContainerCard from './ContainerCard.jsx';
import Footer from './footer.jsx';
import Navbar from './Navbar.jsx';
import Locations from "./Locations.jsx";
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);



function App(){
    useEffect(()=>{
        var swiper3 = new Swiper('.swiper3', {
            slidesPerView: 3,
            spaceBetween: 30,
            // init: false,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            breakpoints: {
              0:{
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }
          });
        })
    return(
    <div>
        <div className="mainContainer">
                
                <Navbar/>

                <div className="navspace"></div>

                <ContainerCard containerTitle="კატეგორიები" color="white" row="no-gutters">
                </ContainerCard>

                <ContainerCard containerTitle="რეკომენდირებული პროდუქტები" >
                </ContainerCard>

                <ContainerCard containerTitle="გალერეა">
                </ContainerCard>

                <ContainerCard containerTitle="ფილიალები" row="no-gutters">
                    <Locations />
                </ContainerCard>

                <Footer />
        </div>
    </div>
    );
}

export default App;