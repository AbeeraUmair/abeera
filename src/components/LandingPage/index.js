import React from 'react';
import "../../App.css";
import Carousel1 from "./FirstCarousel/carousel";
import Carousel2 from "./WhatsNew/carousel2";
import Carousel3 from "./shopByCategory/carousel3";
import Footer from "./Footer/footer";
import Footera from "./Footer/footera";
import Header from "./Header/header";
import Moretoexplore from "./MoreToExplore/moretoexplore";
import Search from "./Search/search";
import Stylebyu from "./StyleByYou/stylebyu";
import Trending from "./Trending/trending";


const LandingPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Carousel1 />
      <Carousel2 />
      <Carousel3 />
      <Trending />
      <Moretoexplore />
      <Stylebyu />
      <Footer />
      <Footera/>
    </div>
  )
}

export default LandingPage
