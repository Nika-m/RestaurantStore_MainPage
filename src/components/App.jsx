import React, {useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import Navbar from "./Navbar.jsx";
import ContainerCard from './ContainerCard.jsx';
import Footer from './footer.jsx';
import Navbar from './Navbar.jsx';
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);



function App(){
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
                </ContainerCard>

                <Footer />
        </div>
    </div>
    );
}

export default App;