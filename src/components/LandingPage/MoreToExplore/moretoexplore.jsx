import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import AOS from 'aos/dist/aos';
import 'aos/dist/aos.css';

const Moretoexplore = () => {
    AOS.init();
  return (
    
    <div>
    <h1 className="text-center">MORE TO EXPLORE</h1>
    <hr />
    <Carousel style={{marginLeft : '2rem'}}>
  <Carousel.Item  className="more">
  <div>
      <img
        className="img-bycategory"
        src="https://cdn.shopify.com/s/files/1/1592/0041/files/more-to-explore2.jpg?v=1723731851"
      />
      </div>
      <div>
  <img
        className="img-bycategory" data-aos="zoom-in"
        src="https://cdn.shopify.com/s/files/1/0026/9238/2780/files/mommy_and_me.jpg?v=1723114267"
      />
     </div>
  
      <div>
  <img
        className="img-bycategory"
        src="https://cdn.shopify.com/s/files/1/1592/0041/files/more-to-explore_e96039a0-9920-4013-a417-203af968659b.jpg?v=1724312278"
      />
      </div>
  </Carousel.Item>
  <Carousel.Item  className="more">
  <div>
  <img
        className="img-bycategory"
        src="https://cdn.shopify.com/s/files/1/1592/0041/files/more_to_explore_c9f48b98-b619-4603-a6c7-9754e5063d2c.jpg?v=1715614629"
      />
      </div>
      <div>
  <img
        className="img-bycategory" data-aos="zoom-in"
        src="https://cdn.shopify.com/s/files/1/1592/0041/files/styled_by_you_MTE.jpg?v=1719989941"
      />
      </div>
      <div>
  <img
        className="img-bycategory"
        src="https://cdn.shopify.com/s/files/1/1592/0041/files/fabric-more-to-explore.webp?v=1698053691"
      />
      </div>
     </Carousel.Item>
     <Carousel.Item  className="more">
  <div>
  <img
        className="img-bycategory"
        src="https://cdn.shopify.com/s/files/1/1592/0041/files/more-to-explore_69e767f0-c94c-4205-9fbf-ada217269011.jpg?v=1723731851"
      />
      </div>
      <div>
      <img
        className="img-bycategory"
        src="https://cdn.shopify.com/s/files/1/1592/0041/files/more-to-explore2.jpg?v=1723731851"
      />
      </div>
      <div>
  <img
        className="img-bycategory" data-aos="zoom-in"
        src="https://cdn.shopify.com/s/files/1/0026/9238/2780/files/mommy_and_me.jpg?v=1723114267"
      />
     </div>
  </Carousel.Item>
</Carousel>
</div>
  )
}

export default Moretoexplore
