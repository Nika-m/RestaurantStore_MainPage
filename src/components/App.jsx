import React, {useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import Navbar from "./Navbar.jsx";
import GalleryImage from "./GalleryImage.jsx";
import Locations from "./Locations.jsx";
import {images, categories} from "./data.js";
import ContainerCard from './ContainerCard.jsx';
import Footer from './footer.jsx';
import Suggestions from './Suggestions';
import Banner from './Banner';
import Navbar from './Navbar.jsx';
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

function createImages(imgObj){
  return(
      <GalleryImage 
          key={imgObj.id}
          path = {imgObj.path}
      />
  )
}


function App(){
    useEffect(()=>{

      var swiper1 = new Swiper('.swiper1');
      
        var swiper2 = new Swiper('.swiper2', {
            slidesPerView: 'auto',
            // centeredSlides: true,
            spaceBetween: 40,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });

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
                <Banner />

                <ContainerCard containerTitle="კატეგორიები" color="white" row="no-gutters">
                <Suggestions categories={categories}/>
                </ContainerCard>

                <ContainerCard containerTitle="რეკომენდირებული პროდუქტები" >
                </ContainerCard>

                <ContainerCard containerTitle="გალერეა">
                    {images.map(createImages)}
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